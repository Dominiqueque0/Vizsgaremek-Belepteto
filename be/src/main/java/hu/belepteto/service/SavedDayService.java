package hu.belepteto.service;

import hu.belepteto.dto.savedDay.GetSavedDay;
import hu.belepteto.model.SavedDay;
import hu.belepteto.model.Visit;
import hu.belepteto.converter.SavedDayConverter;
import hu.belepteto.repository.SavedDayRepository;
import hu.belepteto.repository.VisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SavedDayService {
    @Autowired
    private SavedDayRepository repository;

    @Autowired
    private VisitRepository visitRepository;
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");


    public List<GetSavedDay> createSavedDay() {
        List<GetSavedDay> getSavedDayList = new ArrayList<>();
        List<Visit> savedDayList = visitRepository.findAll();
        for (Visit visit : savedDayList) {
            visit.getVisitor().setCheckedIn(false);
            getSavedDayList.add(SavedDayConverter.convertModelToGet(visit));
        }
        List<SavedDay> savedDayEntities = getSavedDayList.stream()
                .map(SavedDayConverter::convertGetToModel)
                .collect(Collectors.toList());
        repository.saveAll(savedDayEntities);
        return getSavedDayList;
    }

    public List<GetSavedDay> getSavedDayByDate(Date date) {
        List<SavedDay> savedDay = repository.findByEntryTime(date);
        List<GetSavedDay> getSavedDayList = new ArrayList<>();
        for (SavedDay day : savedDay) {
            getSavedDayList.add(SavedDayConverter.convertSavedDayToGet(day));
        }
        return getSavedDayList;
    }
}

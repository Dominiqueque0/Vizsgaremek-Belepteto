package hu.belepteto.service;

import hu.belepteto.converter.VisitConverter;
import hu.belepteto.dto.visit.CreateVisit;
import hu.belepteto.dto.visit.GetVisit;
import hu.belepteto.dto.visit.UpdateOneVisit;
import hu.belepteto.model.Reason;
import hu.belepteto.model.Users;
import hu.belepteto.model.Visit;
import hu.belepteto.model.Visitor;
import hu.belepteto.repository.UserRepository;
import hu.belepteto.repository.VisitRepository;
import hu.belepteto.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class VisitService {
    @Autowired
    private VisitRepository repository;
    @Autowired
    private VisitorRepository visitorRepository;

    @Autowired
    private UserRepository userRepository;

    public GetVisit createVisit(CreateVisit createVisit) {
        System.out.println("hello");
        Visit visit = new Visit();
        Visitor visitor = visitorRepository.getReferenceById(createVisit.getVisitorId());
        visit.setVisitor(visitor);
        visit.setEntryTime(new Date());
        Visit created = repository.save(visit);

        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

        return new GetVisit(
                created.getId(),
                created.getVisitor().getId(),
                created.getVisitor().getName(),
                sdf.format(created.getEntryTime())
        );
    }
    public GetVisit getVisit(Integer id) {
        if (!repository.existsById(id))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        Visit visit = repository.getReferenceById(id);
        GetVisit getVisit = VisitConverter.convertVisitToGetNoExitTime(visit);
        return getVisit;
    }

    public List<GetVisit> listVisits() {
        List<GetVisit> getVisitList = new ArrayList<>();
        List<Visit> visitList = repository.findAll();
        for (Visit visit : visitList) {
            if(visit.getExitTime() == null)
            getVisitList.add(VisitConverter.convertVisitToGetNoExitTime(visit));
            else
                getVisitList.add(VisitConverter.convertVisitToGet(visit));
        }
        return getVisitList;
    }
    public GetVisit updateOneVisit(Integer id) {
        if (!repository.existsById(id))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        Visit visit = repository.getReferenceById(id);
        UpdateOneVisit updateOneVisit = new UpdateOneVisit();
        updateOneVisit.setExitTime(new Date());
        visit.setExitTime(updateOneVisit.getExitTime());
        Visit saved = repository.save(visit);
        GetVisit getVisit = VisitConverter.convertVisitToGet(saved);
        return getVisit;
    }

    public boolean deleteVisit(Integer id) {
        if (!repository.existsById(id))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        repository.deleteById(id);
        return true;
    }
    public boolean deleteAllVisits() {
        repository.deleteAll();
        return true;
    }
}
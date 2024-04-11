package hu.belepteto.converter;

import hu.belepteto.dto.savedDay.GetSavedDay;
import hu.belepteto.model.SavedDay;
import hu.belepteto.model.Visit;

import java.text.SimpleDateFormat;

public class SavedDayConverter {

    public static GetSavedDay convertModelToGet(Visit visit) {
        GetSavedDay getSavedDay = new GetSavedDay();
        getSavedDay.setId(visit.getId());
        getSavedDay.setDate(visit.getEntryTime());
        getSavedDay.setVisitId(visit);
        return getSavedDay;
    }

    public static GetSavedDay convertSavedDayToGet(SavedDay savedDay) {
        GetSavedDay getSavedDay = new GetSavedDay();
        getSavedDay.setId(savedDay.getId());
        getSavedDay.setDate(savedDay.getDate());
        getSavedDay.setVisitId(savedDay.getVisit());
        return getSavedDay;
    }

    public static SavedDay convertGetToModel(GetSavedDay getSavedDay) {
        SavedDay savedDay = new SavedDay();
        savedDay.setId(getSavedDay.getId());
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        savedDay.setDate(getSavedDay.getDate());
        savedDay.setVisit(getSavedDay.getVisitId());

        return savedDay;
    }
}

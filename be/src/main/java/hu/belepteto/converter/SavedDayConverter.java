package hu.belepteto.converter;

import hu.belepteto.dto.savedDay.GetSavedDay;
import hu.belepteto.model.SavedDay;
import hu.belepteto.model.Visit;

import java.text.SimpleDateFormat;

public class SavedDayConverter {

    public static GetSavedDay convertModelToGet(Visit visit) {
        GetSavedDay getSavedDay = new GetSavedDay();
        getSavedDay.setId(visit.getId());
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        getSavedDay.setDate(format.format(visit.getEntryTime()));
        getSavedDay.setVisitId(visit);
        return getSavedDay;
    }

    public static GetSavedDay convertSavedDayToGet(SavedDay savedDay) {
        GetSavedDay getSavedDay = new GetSavedDay();
        getSavedDay.setId(savedDay.getId());
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        getSavedDay.setDate(format.format(savedDay.getDate()));
        getSavedDay.setVisitId(savedDay.getVisit());
        return getSavedDay;
    }
}

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
        getSavedDay.setName(visit.getVisitor().getName());
        getSavedDay.setEntryTime(visit.getEntryTime());
        getSavedDay.setExitTime(visit.getExitTime());
        return getSavedDay;
    }

    public static GetSavedDay convertSavedDayToGet(SavedDay savedDay) {
        GetSavedDay getSavedDay = new GetSavedDay();
        getSavedDay.setId(savedDay.getId());
        getSavedDay.setDate(savedDay.getDate());
        getSavedDay.setEntryTime(savedDay.getDate());
        getSavedDay.setExitTime(savedDay.getExitTime());
        getSavedDay.setName(savedDay.getName());
        return getSavedDay;
    }

    public static SavedDay convertGetToModel(GetSavedDay getSavedDay) {
        SavedDay savedDay = new SavedDay();
        savedDay.setId(getSavedDay.getId());
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        savedDay.setDate(getSavedDay.getDate());
        savedDay.setEntryTime(getSavedDay.getEntryTime());
        savedDay.setExitTime(getSavedDay.getExitTime());
        savedDay.setName(getSavedDay.getName());

        return savedDay;
    }
}

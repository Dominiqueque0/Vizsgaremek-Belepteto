package hu.belepteto.dto.savedDay;

import hu.belepteto.model.Visit;

import java.util.Date;

public class CreateSavedDay {
    private Date date;
    private Visit visitId;

    public CreateSavedDay(Date date, Visit visitId) {
        this.date = date;
        this.visitId = visitId;
    }

    public CreateSavedDay() {
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Visit getVisitId() {
        return visitId;
    }

    public void setVisitId(Visit visitId) {
        this.visitId = visitId;
    }
}

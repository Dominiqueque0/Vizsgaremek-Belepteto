package hu.belepteto.dto.savedDay;

import hu.belepteto.model.Visit;

import java.util.Date;

public class GetSavedDay {
    private Integer id;
    private Date date;
    private Visit visitId;

    public GetSavedDay() {
    }

    public GetSavedDay(Integer id, Date date, Visit visitId) {
        this.id = id;
        this.date = date;
        this.visitId = visitId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

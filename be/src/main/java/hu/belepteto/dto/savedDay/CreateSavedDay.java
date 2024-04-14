package hu.belepteto.dto.savedDay;

import hu.belepteto.model.Visit;
import hu.belepteto.model.Visitor;

import java.util.Date;

public class CreateSavedDay {
    private Date date;
    private Visit visitId;
    private Visitor visitor;
    private String name;
    private Date entryTime;
    private Date exitTime;

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

    public Visitor getVisitor() {
        return visitor;
    }

    public void setVisitor(Visitor visitor) {
        this.visitor = visitor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getEntryTime() {
        return entryTime;
    }

    public void setEntryTime(Date entryTime) {
        this.entryTime = entryTime;
    }

    public Date getExitTime() {
        return exitTime;
    }

    public void setExitTime(Date exitTime) {
        this.exitTime = exitTime;
    }

    public CreateSavedDay() {
    }

    public CreateSavedDay(Date date, Visit visitId, Visitor visitor, String name, Date entryTime, Date exitTime) {
        this.date = date;
        this.visitId = visitId;
        this.visitor = visitor;
        this.name = name;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
    }
}

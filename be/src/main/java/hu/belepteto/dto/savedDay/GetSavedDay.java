package hu.belepteto.dto.savedDay;

import hu.belepteto.model.Visit;
import hu.belepteto.model.Visitor;

import java.util.Date;

public class GetSavedDay {
    private Integer id;
    private Date date;
    private String name;
    private Date entryTime;
    private Date exitTime;

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

    public GetSavedDay() {
    }

    public GetSavedDay(Integer id, Date date, String name, Date entryTime, Date exitTime) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
    }
}

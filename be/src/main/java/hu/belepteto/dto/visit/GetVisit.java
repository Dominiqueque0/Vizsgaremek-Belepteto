package hu.belepteto.dto.visit;

import java.util.Date;

public class GetVisit {
    private Integer id;
    private Integer visitorId;
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String entryTime;
    private String exitTime;

    public GetVisit(Integer id, Integer visitorId,String name, String entryTime, String exitTime) {
        this.id = id;
        this.visitorId = visitorId;
        this.name = name;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
    }

    public GetVisit(Integer id, Integer visitorId,String name, String entryTime) {
        this.id = id;
        this.visitorId = visitorId;
        this.name = name;
        this.entryTime = entryTime;
    }

    public GetVisit() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getVisitorId() {
        return visitorId;
    }

    public void setVisitorId(Integer visitorId) {
        this.visitorId = visitorId;
    }

    public String getEntryTime() {
        return entryTime;
    }

    public void setEntryTime(String entryTime) {
        this.entryTime = entryTime;
    }

    public String getExitTime() {
        return exitTime;
    }

    public void setExitTime(String exitTime) {
        this.exitTime = exitTime;
    }
}
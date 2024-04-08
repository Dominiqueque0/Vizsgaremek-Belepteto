package hu.belepteto.dto.visit;

import java.util.Date;

public class GetVisit {
    private Integer id;
    private Integer visitorId;
    private Integer janitorId;
    private String entryTime;
    private String exitTime;
    private Integer reasonId;

    public GetVisit(Integer id, Integer visitorId, Integer janitorId, String entryTime, String exitTime, Integer reasonId) {
        this.id = id;
        this.visitorId = visitorId;
        this.janitorId = janitorId;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.reasonId = reasonId;
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

    public Integer getJanitorId() {
        return janitorId;
    }

    public void setJanitorId(Integer janitorId) {
        this.janitorId = janitorId;
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

    public Integer getReasonId() {
        return reasonId;
    }

    public void setReasonId(Integer reasonId) {
        this.reasonId = reasonId;
    }
}
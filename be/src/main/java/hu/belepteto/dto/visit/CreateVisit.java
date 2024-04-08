package hu.belepteto.dto.visit;

import hu.belepteto.model.Reason;
import hu.belepteto.model.Users;
import hu.belepteto.model.Visitor;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

import java.util.Date;

public class CreateVisit {
    private Integer visitorId;
    private Integer janitorId;
    private Date entryTime;
    private Date exitTime;
    private Integer reasonId;

    public CreateVisit(Integer visitorId, Integer janitorId, Date entryTime, Date exitTime, Integer reasonId) {
        this.visitorId = visitorId;
        this.janitorId = janitorId;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.reasonId = reasonId;
    }

    public CreateVisit() {
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

    public Integer getReasonId() {
        return reasonId;
    }

    public void setReasonId(Integer reasonId) {
        this.reasonId = reasonId;
    }
}

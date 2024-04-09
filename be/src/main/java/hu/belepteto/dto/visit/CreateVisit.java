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
    private Integer reasonId;

    public CreateVisit(Integer visitorId, Integer janitorId, Integer reasonId) {
        this.visitorId = visitorId;
        this.janitorId = janitorId;
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

    public Integer getReasonId() {
        return reasonId;
    }

    public void setReasonId(Integer reasonId) {
        this.reasonId = reasonId;
    }
}

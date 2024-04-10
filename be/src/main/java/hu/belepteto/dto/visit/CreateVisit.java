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

    public CreateVisit(Integer visitorId) {
        this.visitorId = visitorId;
    }

    public CreateVisit() {
    }

    public Integer getVisitorId() {
        return visitorId;
    }

    public void setVisitorId(Integer visitorId) {
        this.visitorId = visitorId;
    }

}

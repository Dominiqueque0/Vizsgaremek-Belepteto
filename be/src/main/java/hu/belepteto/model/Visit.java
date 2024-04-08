package hu.belepteto.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Visit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "visitor_id")
    private Visitor visitor;

    @ManyToOne
    @JoinColumn(name = "janitor_id")
    private Users janitor;
    private Date entryTime;
    private Date exitTime;
    @OneToOne
    @JoinColumn(name = "reason_id")
    private Reason reason;

    public Visit(Integer id, Visitor visitor, Users janitor, Date entryTime, Date exitTime, Reason reason) {
        this.id = id;
        this.visitor = visitor;
        this.janitor = janitor;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.reason = reason;
    }

    public Visit() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Visitor getVisitor() {
        return visitor;
    }

    public void setVisitor(Visitor visitor) {
        this.visitor = visitor;
    }

    public Users getJanitor() {
        return janitor;
    }

    public void setJanitor(Users janitor) {
        this.janitor = janitor;
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

    public Reason getReason() {
        return reason;
    }

    public void setReason(Reason reason) {
        this.reason = reason;
    }
}

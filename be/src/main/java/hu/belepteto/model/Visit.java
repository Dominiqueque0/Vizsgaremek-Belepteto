package hu.belepteto.model;

import jakarta.annotation.Nullable;
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
    private Date entryTime;

    @Nullable
    private Date exitTime;

    public Visit(Integer id, Visitor visitor, Date entryTime, Date exitTime) {
        this.id = id;
        this.visitor = visitor;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
    }

    public Visit(Integer id, Visitor visitor, Date entryTime) {
        this.id = id;
        this.visitor = visitor;
        this.entryTime = entryTime;
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
}

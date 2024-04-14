package hu.belepteto.model;

import jakarta.persistence.*;

import javax.annotation.Nullable;
import java.util.Date;

@Entity
public class SavedDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "visit_id", referencedColumnName = "id", nullable = true)
    private Visit visit;

    @Column(name = "savedate")
    private Date date;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "visitor_id")
    private Visitor visitor;

    private String name;
    private Date entryTime;
    private Date exitTime;

    public SavedDay() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Visit getVisit() {
        return visit;
    }

    public void setVisit(Visit visit) {
        this.visit = visit;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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

    public SavedDay(Integer id, Visit visit, Date date, Visitor visitor, String name, Date entryTime, Date exitTime) {
        this.id = id;
        this.visit = visit;
        this.date = date;
        this.visitor = visitor;
        this.name = name;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
    }
}

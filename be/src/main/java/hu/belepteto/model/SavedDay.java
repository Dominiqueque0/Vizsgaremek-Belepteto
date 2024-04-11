package hu.belepteto.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class SavedDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "visit_id")
    private Visit visit;

    @Column(name = "savedate")
    private Date date;

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

    public SavedDay() {
    }

    public SavedDay(Integer id, Visit visit, Date date) {
        this.id = id;
        this.visit = visit;
        this.date = date;
    }
}

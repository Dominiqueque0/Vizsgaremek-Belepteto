package hu.belepteto.dto.visitor;

import hu.belepteto.model.VisitorType;

public class GetVisitor {

    private Integer id;
    private String name;
    private VisitorType visitorType;
    private String idNumber;
    private boolean checkedIn;

    public boolean isCheckedIn() {
        return checkedIn;
    }

    public void setCheckedIn(boolean checkedIn) {
        this.checkedIn = checkedIn;
    }

    public GetVisitor(Integer id, String name, VisitorType visitorType, String idNumber, boolean checkedIn) {
        this.id = id;
        this.name = name;
        this.visitorType = visitorType;
        this.idNumber = idNumber;
        this.checkedIn = checkedIn;
    }

    public GetVisitor() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public VisitorType getVisitorType() {
        return visitorType;
    }

    public void setVisitorType(VisitorType visitorType) {
        this.visitorType = visitorType;
    }

    public String getIdNumber() {
        return idNumber;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    }
}

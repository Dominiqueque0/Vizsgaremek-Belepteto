package hu.belepteto.dto.visitor;

import hu.belepteto.model.VisitorType;

public class CreateVisitor {
    private String name;
    private VisitorType visitorType;
    private String idNumber;

    public CreateVisitor(String name, VisitorType visitorType, String idNumber) {
        this.name = name;
        this.visitorType = visitorType;
        this.idNumber = idNumber;
    }

    public CreateVisitor() {
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

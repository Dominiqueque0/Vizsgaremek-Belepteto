package hu.belepteto.converter;

import hu.belepteto.dto.visitor.GetVisitor;
import hu.belepteto.model.Visitor;

import java.text.ParseException;

public class VisitorConverter {
    public static GetVisitor convertVisitorToGet(Visitor visitor) {
        GetVisitor getVisitor = new GetVisitor();
        getVisitor.setId(visitor.getId());
        getVisitor.setName(visitor.getName());
        getVisitor.setVisitorType(visitor.getVisitorType());
        getVisitor.setIdNumber(visitor.getIdNumber());
        getVisitor.setCheckedIn(visitor.isCheckedIn());
        return getVisitor;
    }

    public static Visitor convertGetToVisitor(GetVisitor getVisitor) throws ParseException {
        Visitor visitor = new Visitor();
        visitor.setId(getVisitor.getId());
        visitor.setName(getVisitor.getName());
        visitor.setVisitorType(getVisitor.getVisitorType());
        visitor.setIdNumber(getVisitor.getIdNumber());
        visitor.setCheckedIn(getVisitor.isCheckedIn());
        return visitor;
    }
}

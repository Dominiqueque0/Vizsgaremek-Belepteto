package hu.belepteto.converter;

import hu.belepteto.dto.visit.GetVisit;
import hu.belepteto.model.Visit;

import java.text.SimpleDateFormat;

public class VisitConverter {

    public static GetVisit convertVisitToGet(Visit visit) {
        GetVisit getVisit = new GetVisit();
        getVisit.setId(visit.getId());
        getVisit.setVisitorId(visit.getVisitor().getId());
        getVisit.setName(visit.getVisitor().getName());

        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

        getVisit.setEntryTime(sdf.format(visit.getEntryTime()));
        getVisit.setExitTime(sdf.format(visit.getExitTime()));
        return getVisit;
    }

    public static GetVisit convertVisitToGetNoExitTime(Visit visit) {
        GetVisit getVisit = new GetVisit();
        getVisit.setId(visit.getId());
        getVisit.setVisitorId(visit.getVisitor().getId());
        getVisit.setName(visit.getVisitor().getName());

        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

        getVisit.setEntryTime(sdf.format(visit.getEntryTime()));
        return getVisit;
    }
}

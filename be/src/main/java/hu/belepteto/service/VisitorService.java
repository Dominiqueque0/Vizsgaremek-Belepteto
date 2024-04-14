package hu.belepteto.service;

import hu.belepteto.converter.VisitorConverter;
import hu.belepteto.dto.visitor.CreateVisitor;
import hu.belepteto.dto.visitor.GetVisitor;
import hu.belepteto.model.Visitor;
import hu.belepteto.repository.UserRepository;
import hu.belepteto.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class VisitorService {
    @Autowired
    private VisitorRepository repository;

    @Autowired
    private UserRepository userRepository;



    public boolean deleteVisitor(Integer id) {
        if (!repository.existsById(id))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        repository.deleteById(id);
        return true;
    }

    public GetVisitor createVisitor(CreateVisitor createVisitor) {
        Visitor visitor = new Visitor();
        visitor.setVisitorType(createVisitor.getVisitorType());
        visitor.setName(createVisitor.getName());
        visitor.setIdNumber(createVisitor.getIdNumber());
        visitor.setCheckedIn(false);

        return VisitorConverter.convertVisitorToGet(repository.save(visitor));
        }

    public GetVisitor getVisitor(Integer id) {
        if (!repository.existsById(id))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        Visitor visitor = repository.getReferenceById(id);
        return VisitorConverter.convertVisitorToGet(visitor);
    }


    public List<GetVisitor> listVisitors() {
        List<GetVisitor> getVisitorList = new ArrayList<>();
        List<Visitor> visitorList = repository.findAll();
        for (Visitor visitor : visitorList) {
            getVisitorList.add(VisitorConverter.convertVisitorToGet(visitor));
        }
        return getVisitorList;
    }
}

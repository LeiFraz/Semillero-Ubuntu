package com.ubuntu.back.services;

import com.ubuntu.back.models.domain.Message;
import com.ubuntu.back.repositories.IBaseRepository;
import com.ubuntu.back.repositories.IMessageRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MessageService extends BaseService<Message>{

    @Autowired
    private IMessageRepository repository;
    @Autowired
    private MicroBusinessService microBusinessService;

    public MessageService(IBaseRepository<Message> baseRepository){
        super(baseRepository);
    }

    @Override
    @Transactional
    public Message save(Message message) throws Exception {
        try{
            message.setMicroBusiness(microBusinessService.findById(message.getMicroBusiness().getId()));
            message.setRequestDate(LocalDate.now());
            return super.save(message);
        }catch(Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public void changeMessageToManaged(Long id) throws Exception{
        try{
            Message message = findById(id);
            message.setManaged(LocalDate.now());
            update(message.getId(), message);
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public List<Message> findByManaged(boolean managed) throws Exception{
        try{
            return ((managed) ? repository.findByManagedIsNotNull() : repository.findByManagedIsNull());
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public Long countMessages(Boolean manage) throws Exception{
        try{
            return (manage) ? repository.countManagedMessages() : repository.countNotManagedMessages();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    public Long countMessagesInCurrentMonth(Boolean manage) throws Exception{
        try{
            return (manage) ?
                    repository.countManagedMessagesInCurrentMonth() :
                    repository.countNotManagedMessagesInCurrentMonth();
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

}

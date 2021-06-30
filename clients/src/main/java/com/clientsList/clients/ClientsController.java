package com.clientsList.clients;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin
@RestController
public class ClientsController {

    List<Client> clients = new ArrayList<Client>();

    public ClientsController() {
        String[] interests1 = {"Skiing", "Dogs"};
        Client john = new Client(0,"John", "Doe", 50, "London", interests1);
        clients.add(john);
        String[] interests2 = {"Football", "Design"};
        Client evan = new Client(1, "Evan", "Neville", 43, "Manchester", interests2);
        clients.add(evan);
        String[] interests3 = {"Hockey", "Programming"};
        Client andrea = new Client(2,"Andrea", "Rooney", 38, "Derby", interests3);
        clients.add(andrea);
        String[] interests4 = {"Tennis", "Brewing"};
        Client simon = new Client(3, "Simon", "Greeland", 32, "Birmingham", interests4);
        clients.add(simon);
        String[] interests5 = {"Golf", "Wine"};
        Client ashley = new Client(4, "Ashley", "Strong", 56, "Reading", interests5);
        clients.add(ashley);
    }

    @GetMapping("/clients")
    // get clients
    public List<Client> getClients() {
        return this.clients;
    }


    @GetMapping("/clients/{clientsId}")
    //get single student by id
    public Client getClient(@PathVariable int id) {

        return this.clients.get(id);
    }


    @PostMapping("/client")
    public Client createStudent(@RequestBody Client client) {
        //how we create a student
        this.clients.add(client);
       for (Client c : this.clients) {
           System.out.println(c.getFirstName());
       }

        return client;
    }

    //delete a student by id as well
}

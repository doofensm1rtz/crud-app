package com.crud.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class URLController {
    @Autowired
    private URLRepository urlRepository;

    // @Autowired
    // private SequenceGeneratorService sequenceGeneratorService;

    @GetMapping("/urls")
    public List<URL> getAllURLs() {
        return urlRepository.findAll();
    }

    @GetMapping("/urls/{name}")
    public ResponseEntity<URL> getURLByName(@PathVariable(value = "name") String urlName)
            throws ResourceNotFoundException {
        URL url = urlRepository.findById(urlName).orElseThrow(() -> new ResourceNotFoundException());

        return ResponseEntity.ok(url);
    }

    @PostMapping("/urls")
    public ResponseEntity<URL> createURL(@Validated @RequestBody URL url) {
        // url.setId(sequenceGeneratorService.generateSequence(URL.SEQUENCE_Id))
        return ResponseEntity.ok(urlRepository.save(url));
    }

    @PutMapping("/urls/{name}")
    public ResponseEntity<URL> updateURL(@PathVariable("name") String urlName, @Validated @RequestBody URL newURL)
            throws ResourceNotFoundException {
        URL oldURL = urlRepository.findById(newURL.getName()).orElseThrow(() -> new ResourceNotFoundException());

        oldURL.setURL(newURL.getURL());
        return ResponseEntity.ok(urlRepository.save(oldURL));
    }

    @DeleteMapping("/urls/{name}")
    public ResponseEntity<String> deleteURL(@PathVariable("name") String urlName) throws ResourceNotFoundException {
        URL url = urlRepository.findById(urlName).orElseThrow(() -> new ResourceNotFoundException());

        urlRepository.delete(url);
        return ResponseEntity.ok("URL with Name : " + urlName + " deleted");
    }
}

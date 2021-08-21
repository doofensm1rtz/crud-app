package com.crud.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/urls/{id}")
    public ResponseEntity<URL> getURLById(@PathVariable(value = "id") String urlId) throws ResourceNotFoundException {
        URL url = urlRepository.findById(urlId)
            .orElseThrow(() -> new ResourceNotFoundException("URL not found for this Id : " + urlId));

        return ResponseEntity.ok(url);
    }

    @PostMapping("/urls")
    public URL createURL(@Validated @RequestBody URL url) {
        // url.setId(sequenceGeneratorService.generateSequence(URL.SEQUENCE_NAME))
        return urlRepository.save(url);
    }

    @PutMapping("/urls/{id}")
    public ResponseEntity<URL> updateURL(@PathVariable(value = "id") String urlId, @Validated @RequestBody URL newURL) 
        throws ResourceNotFoundException{
        URL oldURL = urlRepository.findById(newURL.getId())
            .orElseThrow(() -> new ResourceNotFoundException("URL not found for this Id : " + urlId));

        oldURL.setURL(newURL.getURL());
        
        return ResponseEntity.ok(urlRepository.save(oldURL));
    }

    @DeleteMapping("/urls/{id}")
    public ResponseEntity<String> deleteURL(@PathVariable(value = "id") String urlId) throws ResourceNotFoundException {
        URL url = urlRepository.findById(urlId)
            .orElseThrow(() -> new ResourceNotFoundException("URL not found for this Id : " + urlId));

        urlRepository.delete(url);
        return ResponseEntity.ok("URL with Id : " + urlId + " deleted");
    }
}

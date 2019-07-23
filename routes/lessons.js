const express = require('express');
const router = express.Router();
const lessonModel = require('../models/Lesson.js')

router.get('/', function(req, res){
  lessonModel.find(function(err, lessons){
    if(err){
      console.log("error : ", err);
    }else{
      res.json(lessons);
    }
  })
});

router.get('/:id', function(req, res){

  let id = req.params.id;

  lessonModel.findById(id, function(err, lesson){
    if(err){
      console.log("lesson not found :", err);
    }else{
      res.json(lesson);
    }
  });
});

router.post('/addLesson', function(req, res){

  let newLesson = new lessonModel(req.body);

  newLesson.save()
    .then(function(newLesson){
      res.status(200).json({'newLesson' : 'Lesson added successfully'});
    })
    .catch(function(err){
      console.log('err', err);
      res.status(400).send('Unable to add new lesson')
    })
});

router.post('/update/:id', function(req,res){
  lessonModel.findById(req.params.id, function(err, lesson){
    if(!lesson){
      res.status(404).send('Data not found')
    }else{
      lesson.dayOfTheWeek = req.body.dayOfTheWeek;
      lesson.time = req.body.time;
      lesson.location = req.body.location;
      lesson.yogaStyle = req.body.yogaStyle;
      lesson.linkToStudio = req.body.linkToStudio;

      lesson.save().then(function(lesson){
        res.status(200).json('Update successful')
      })
      .catch(function(err){
        res.status(400).send('Update unsuccessful')
      });
    }
  });
});

router.delete('/delete/:id', function(req, res){
  lessonModel.findByIdAndDelete({_id : req.params.id}, function(err){
    if(err){
      res.status(404).send("Data not found")
    }else{
      res.status(200).send('Lesson successfully removed')
    }
  });
})

module.exports = router;
import Ember from 'ember';

var Photo = Ember.Object.extend({
    title: '',
    username: '',
    url: '',
});

var PhotoCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
    sortProperties: ['title'],
    sortAscending: true,
    content: [],
});

var testPhotos = PhotoCollection.create();
var testimg1 = Photo.create({
    title: "Google logo",
    username: "google",
    url: "https://www.google.com/images/srpr/logo11w.png"

});

var testimg2 = Photo.create({
    title: "UNO logo",
    username: "UNO",
    url: "http://www.unomaha.edu/_files/images/logo-subsite-o-2.png"
});

testPhotos.pushObject(testimg1);
testPhotos.pushObject(testimg2);

export default Ember.Controller.extend({
    photos: testPhotos

});

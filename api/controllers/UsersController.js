/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
      return res.send('Hi there!');
    },
    bye: function (req, res) {
      return res.redirect('http://www.sayonara.com');
    },
    createRec: function(req, res) {
      sails.log(req.param('userName'));
      var body={'userName':req.param('userName'),'password':req.param('password')}
       Users.create(body).exec(function (err, finn){
        if (err) { return res.serverError(err); }
        sails.log('User\'s id is:', finn.id);
        return res.send(finn);
      });
    }
};

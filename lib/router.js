Router.configure({
  layoutTemplate: 'main_layout',
  loadingTemplate: 'loading_layout'
});

Router.map(function () {
  this.route('menu', {
    path: '/',
    fastRender: true,
    waitOn: function() {
      return Meteor.subscribe("drinks");
    },
    data: {
      drinks: function() {
        return Drinks.find({});
      }
    }
  });

  this.route('orders', {
    path: '/orders',
    fastRender: true,
    waitOn: function() {
      return Meteor.subscribe("orders");
    },
    data: {
      orders: function() {
        return Orders.find({});
      }
    }
  });

  this.route('add_drink', {
    path: '/drinks/add',
    fastRender: true
  });

  this.route('edit_drink', {
    path: '/drinks/edit/:_id',
    fastRender: true,
    waitOn: function() {
      return Meteor.subscribe("drinks");
    },
    data: function() {
      return Drinks.findOne(this.params._id);
    }
  });

  this.route('list_drinks', {
    path: '/drinks/list',
    fastRender: true,
    waitOn: function() {
      return Meteor.subscribe("drinks");
    },
    data: {
      drinks: function() {
        return Drinks.find({});
      }
    }
  });
});

Router.configure({
  layoutTemplate: 'main_layout',
  loadingTemplate: 'loading_layout'
});

Router.map(function () {
  this.route('menu', {
    path: '/',
    fastRender: true,
    waitOn: function() {
      Meteor.subscribe("userData");
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
        return Orders.find({ready: false});
      }
    }
  });

  this.route('add_drink', {
    path: '/admin/drinks/add',
    fastRender: true
  });

  this.route('edit_drink', {
    path: '/admin/drinks/edit/:_id',
    fastRender: true,
    waitOn: function() {
      return Meteor.subscribe("drinks");
    },
    data: function() {
      return Drinks.findOne(this.params._id);
    }
  });

  this.route('list_drinks', {
    path: '/admin/drinks',
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

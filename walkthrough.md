Walkthrough of App

application.js
• Upon navigation to?
  - Create holder for all models, views, collections and routers
• Upon document load
  - Create new router
  - Begin Backbone history
• After, google.load

Router
• One route
  - Upon '', do index()
• Upon initialization of router:
  - Performs feedsDataLoop() [models, collections & collection views created]
  - Creates new App.SearchView()
• feedsDataLoop()
  - Loops through categories in array, creates new collection/coll view
  - Loops through URLs in each category, creates new model
  • createFeedModel()
    - Makes API call on each URL in feeds array in each category
    - Loops through result (array of headlines) of each URL
      - Creates new model for each headline, assigns title, author, etc.
      - Adds model to correct collection view
      - Renders the category view

Model View
• Creates el '.story'
• Initialization
  - Gives it template (#story-template)
  - (Gives it modal template (#story-modal-template))
  - Calls render()
• render()
  - Empties the '.story' el (unnecessary?)
  - Sets the el's html as the model template
• events:
  - When click model, perform showModal
• showModal()
  - Empties the '#modal' div (index.html)
  - Sets the html of '#modal' as the modal template
  -> Modal template knows to use model's info bc called in context of model?

Collection View
• Creates el '.collection'
• Initialization
  - Listens for any newly added models; creates model view when one is added
  - Append el to '#feed'
  - Gives it template ('#category-template')
  - Don't render the collection view here; done in the router after
    adding model to collection
• Events
  -> Click on category title, show only that category's stories

Search View
• New search view created upon router initialization
• The search view is simply for the input bar & the button
• Within this file, create another view for the searched content?
• Event: click search button, triggers:
  - find()
  - findDone()
  - createModel()
  - render()

  => find()
    - Triggers the Find API call on the query
    - Triggers (only references?) findDone() in the context of *this*
      (here, this = search view)
    - Now anytime findDone is called, will be performed in the context of *this*
  => findDone()
    - Creates new collection w/category of 'Search'
    - Creates new collection view (App.ViewsSearch)
    - Loops thru found URLs, triggers createModel() for each URL
  => createModel()
    - Loops through one URL & creates model for each headline
    - Adds model to collection 'Search', renders collection search view
  => render()
    - Sets #searched-content div's html as the App.ViewsSearch's el
    - App.ViewSearch's el = .collection (bc it is a storiesCollectionView)

* How emptying #searched-content before appending new?














//

**Architecture** 

The application is structured in a modified [onion architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/) 
organized around the [CoreModule](src/app/core/README.md), a 
[pure service module](https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-module-recommendations) providing
application-wide singleton services imported at consumed in classes across the application. Domain model classes live 
here as well, of course, though they are not 

[SharedModule](src/app/shared/README.md) exports a set of domain-agnostic components, directives and pipes used across the application. 


[BallotModule](src/app/ballot/README.md), [ResultsModule](src/app/results/README.md), [CreateModule](src/app/create/README.md), 
and [HomeModule](src/app/ballot/README.md) are [feature modules](https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-module-recommendations) 
that provide the four primary interfaces of the application, consuming the services and utilities provided at the inner core and shared modules to do so. 


This is all relatively standard for an Angular 2 application - the only notable quirk in our architecture arises from 
a unique requirement: Our application's central feature set (embodied in the Ballot and Results modules) is 
targeted for display both in the context of our website along with all other interfaces, and also independently
in the context of widgets embedded as iframes into arbitrary web pages. 

Obviously, we only want to implement these features once, but: The widget _only_ includes the ballot and results interfaces,
and clearly we don't want to load any more than we have to when displaying it. Further, whereas these interfaces will be 
displayed beneath the website's nav bar when displayed there, they need to be "unwrapped" from it when displayed in the 
widget. 

Thus, whereas the [prototypical ng2 application](https://github.com/mgechev/angular-seed/tree/master/src/client/app)
has a single [root module](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#root-module) and [root component](),
our application has two: the [WebsiteRootModule](src/app/website-root/README.md) and 
[WidgetRootModule](src/app/website-root/README.md), which import the parts of the application they and provide the UI 
base for deployments to the website and widget, respectively.

The AppModule and AppContainer classes in this directory exist purely to route to the appropriate root. 

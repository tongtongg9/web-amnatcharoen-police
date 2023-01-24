$(document).ready(function () {
    // Create a route object
    const route = {
        path: 'vison',
        method: 'GET',
        handler: function () {
            // Handler code here
            $('#nav-vision').removeClass()
            $('#nav-vision').addClass('rounded-lg px-3 py-2 border border-white border-transparent hover:bg-primary hover:scale-105 transition active:bg-primary-100')
        },
    }

    // Add the route to the router using jQuery's .on() method
    $(window).on(route.method, route.path, route.handler)

    // Trigger the route when the page loads
    $(window).trigger(route.method, [route.path])
})

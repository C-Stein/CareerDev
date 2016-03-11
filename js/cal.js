$('document').ready(function () {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyAjZs-mj0LsQ7QNcqXnd5GcsvoU6UUiXeI',
    events: {
      googleCalendarId: 'nashvillesoftwareschool.com_ecrqo8n3d14jnhb4sd0kdif8sc@group.calendar.google.com'
    },
    header: {
      left: 'month,agendaWeek,agendaDay',
      center: 'title',
      right: 'today prev,next'
    }
  })
});

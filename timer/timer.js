class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
    this.refs = this.getRefs(selector);
  }
 
  getRefs() {
    const days = this.container.querySelector('[data-value="days"]');
    const hours = this.container.querySelector('[data-value="hours"]');
    const mins = this.container.querySelector('[data-value="mins"]');
    const secs = this.container.querySelector('[data-value="secs"]');
    return { days, hours, mins, secs };
  }
 
  getDiff =()=> this.targetDate - Date.now();
  pad(value) {
          return String(value).padStart(2, '0');
      }
  getRenderTime = () => {
    const time = this.getDiff();
 
    const renderDays = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const renderHours = this.pad(Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ));
    const renderMins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const renderSecs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
 
    return { renderDays, renderHours, renderMins, renderSecs };
  };
 
  renderData() {
    setInterval(() => {
      let { renderDays, renderHours, renderMins, renderSecs } =
        this.getRenderTime();
      let { days, hours, mins, secs } = this.refs;
 
      days.textContent = renderDays;
      hours.textContent = renderHours;
      mins.textContent = renderMins;
      secs.textContent = renderSecs;
    }, 1000);
  }
}
 
const newTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(2021,8,18,16,27,13),
});
 
newTimer.renderData();
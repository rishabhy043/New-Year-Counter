
    const year = document.querySelector(".new-year");
    const days = document.querySelector(".days");
    const hours = document.querySelector(".hours");
    const min = document.querySelector(".min");
    const sec = document.querySelector(".sec");

    const currentyear = new Date().getFullYear();
    const nextyear = currentyear + 1;

    setInterval(() => {
        const currentdate = new Date();
        const newyeardate = new Date(`January 01 ${nextyear} 00:00:00`);
        const totalsecond = (newyeardate - currentdate) / 1000;

        const daysleft = Math.floor(totalsecond / 3600 / 24);
        const hoursleft = Math.floor(totalsecond / 3600) % 24;
        const minutesleft = Math.floor(totalsecond / 60) % 60;
        const secondsleft = Math.floor(totalsecond) % 60;

        year.innerHTML = nextyear;  // Update year dynamically
        days.innerHTML = daysleft;
        hours.innerHTML = hoursleft;
        min.innerHTML = minutesleft;
        sec.innerHTML = secondsleft;
    }, 1000);

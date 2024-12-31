


const scrollRevealOption = {
    distance: "200px",
    duration: 1500,
 };

 //index.html

ScrollReveal().reveal(".KoolSleek h1",{
    ...scrollRevealOption,
    delay: 650,
});

//contact.html

ScrollReveal().reveal(".Contact-Us h1",{
    ...scrollRevealOption,
    delay: 250,
});

ScrollReveal().reveal(".Contact-Us h2",{
    ...scrollRevealOption,
    delay: 350,
});

ScrollReveal().reveal(".Contact-Us p",{
    ...scrollRevealOption,
    delay: 550,
});

//about.html

ScrollReveal().reveal(".About h1",{
    ...scrollRevealOption,
    delay: 350,
});

ScrollReveal().reveal(".About p",{
    ...scrollRevealOption,
    delay: 550,
});

//faqs.html

ScrollReveal().reveal(".FAQS h1",{
    ...scrollRevealOption,
    delay: 350,
});

ScrollReveal().reveal(".payment_1 h2",{
    ...scrollRevealOption,
    delay: 450,
});

ScrollReveal().reveal(".sentences_1 li",{
    ...scrollRevealOption,
    delay: 550,
});
let a = [
  {
    quote:
      "The greatest glory in living lies not in never falling but in rising every time we fall.",
    authore: "-Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    authore: "-Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    authore: "-Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    authore: "-Eleanor Roosevelt",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    authore: "-James Cameron",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    authore: "-Anne Frank",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    authore: "-John Lennon",
  },
];
document.getElementById("button").addEventListener("click", function () {
  var randomquote = a[Math.floor(Math.random() * a.length)];
  document.getElementById("Quote").innerHTML = randomquote.quote;
  document.getElementById("authore").innerHTML = randomquote.authore;
});

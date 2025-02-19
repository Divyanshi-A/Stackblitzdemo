// Collection of different types of content
export const content = {
  jokes: [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't eggs tell jokes? They'd crack up!"
  ],
  quotes: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Success is not final, failure is not fatal. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Life is what happens while you're busy making other plans. - John Lennon"
  ],
  compliments: [
    "Your smile lights up the room!",
    "You make the world a better place just by being in it.",
    "You've got a great sense of humor!",
    "Your positive energy is contagious!",
    "You're more amazing than you realize!"
  ],
  facts: [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "A day on Venus is longer than its year!",
    "The first oranges weren't orange - they were green!",
    "Octopuses have three hearts!",
    "A cloud can weigh more than a million pounds!"
  ]
};

// Generate random colors for background gradient
export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Keep track of recently used content to avoid repetition
const recentlyUsed = new Set();
const maxRecentlyUsed = 10;

export function getRandomContent() {
  const categories = Object.keys(content);
  let selectedContent;
  
  // Keep trying until we find content that hasn't been recently used
  do {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryContent = content[randomCategory];
    selectedContent = categoryContent[Math.floor(Math.random() * categoryContent.length)];
  } while (recentlyUsed.has(selectedContent));

  // Add to recently used and remove oldest if necessary
  recentlyUsed.add(selectedContent);
  if (recentlyUsed.size > maxRecentlyUsed) {
    recentlyUsed.delete([...recentlyUsed][0]);
  }

  return selectedContent;
}
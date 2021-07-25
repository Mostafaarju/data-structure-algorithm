const friends = ['Spiderman', 'Ironman', 'Gotman', 'Antman', 'Cowman'];
for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  if (element == 'Gotman') {
    return i;
  }
}

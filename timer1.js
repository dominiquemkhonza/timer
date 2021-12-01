const beeps = process.argv.slice(2);
// refresher: argv is the array that contains everything given on the command line
// argv[0] -> path to the node itself
// argv[1] -> path to script code

for (let beep of beeps) 
// beeps refer to the command line arguments
{
  if (beep > 0) {
    setTimeout(function() {
      process.stdout.write('\x07');
    }, beep * 1000);
  }
}
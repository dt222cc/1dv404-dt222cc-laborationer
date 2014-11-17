using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NastStorsta
{
    class Program
    {
        static void Main(string[] args)
        {
            int amountOfTimes = 10;
            int largest = 0, sLargest = 0, count = 0;
            int input;

            Console.WriteLine("Mata in " + amountOfTimes + " heltal:\n");

            while (count < amountOfTimes)
            {
                try
                {
                    count++;
                    Console.Write(count+": ");
                    input = int.Parse(Console.ReadLine());

                    if (input > largest)
                    {
                        sLargest = largest;
                        largest = input;
                    }
                    else if (input < largest && input > sLargest)
                    {
                        sLargest = input;
                    }
                }
                catch
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("FEL! Ange heltal.");
                    Console.ResetColor();
                }
            }
            Console.WriteLine("\nDet näst största talet är: {0}\n",sLargest);
        }
    }
}
// Referenser:
// http://stackoverflow.com/questions/160930/how-do-i-check-if-an-integer-is-even-or-odd

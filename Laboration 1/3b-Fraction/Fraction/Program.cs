using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fraction
{
    class Program
    {
        static void Main(string[] args)
        {
            // Test - Exempel på bråktal
            Fraction firstFraction = new Fraction(1, 3);
            Fraction secondFraction = new Fraction(-1, 3);

            // Addition test
            Console.WriteLine("Addition: {0}/{1} + {2}/{3}: \n" + Fraction.add(firstFraction, secondFraction) + "\n",
                firstFraction.Numerator, firstFraction.Denominator, secondFraction.Numerator, secondFraction.Denominator);

            // Multiplikation test
            Console.WriteLine("Multiplikation: {0}/{1} * {2}/{3}: \n" + Fraction.multiply(firstFraction, secondFraction) + "\n",
                firstFraction.Numerator, firstFraction.Denominator, secondFraction.Numerator, secondFraction.Denominator);

            // isEqualTo Test
            //Console.WriteLine("Representerar samma bråktal? \n{0}/{1} och {2}/{3}: " + Fraction.isEqualTo(firstFraction, secondFraction) + "\n",
            //    firstFraction.Numerator, firstFraction.Denominator, secondFraction.Numerator, secondFraction.Denominator);
        }
    }
}
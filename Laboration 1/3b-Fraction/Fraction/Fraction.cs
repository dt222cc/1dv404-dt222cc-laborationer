using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fraction
{
    class Fraction
    {
        private int _denominator; // Nämnare
        private int _numerator; // Täljare

        // Konstruktor som skapar och initialiserar ett nytt bråktal.
        public Fraction(int numerator, int denominator)
        {
            Numerator = numerator;
            Denominator = denominator;
        }

        // Metoden getNumerator som returnerar täljaren.
        public int Numerator
        {
            get { return _numerator; }
            set { _numerator = value; }
        }

        // Metoden getDenominator som returnerar nämnaren. Nämnaren får inte vara noll.
        public int Denominator
        {
            get { return _denominator; }
            set
            {
                try
                {
                    if (value == 0)
                    {
                        _denominator = 1;
                        throw new ArgumentException();
                    }
                    _denominator = value;
                }
                catch (ArgumentException)
                {
                    Console.BackgroundColor = ConsoleColor.Red;
                    Console.WriteLine("{0}/0! Nämnaren får inte vara noll!", _numerator);
                    Console.ResetColor();
                }
            }
        }

        // Metoden isNegative som ger true om det är ett negativt bråktal.
        public bool isNegative()
        {
            if (_numerator < 0 || _denominator < 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        // Metoden add som adderar den första bråktalet med den andra och sedan returnerar ett nytt bråktal.
        public static Fraction add(Fraction firstFraction, Fraction secondFraction)
        {
            Fraction result;

            // Gemensam nämnare
            if (firstFraction._denominator == secondFraction._denominator)
            {
                int newNumerator = firstFraction.Numerator + secondFraction.Numerator;

                // Ingen skillnad på nämnaren (samma som förut)
                result = new Fraction(newNumerator, firstFraction.Denominator);
            }
            // Ingen gemensam nämnare
            else
            {
                int newNumerator = (firstFraction.Numerator * secondFraction.Denominator) + (firstFraction.Denominator * secondFraction.Numerator);
                int newDenominator = firstFraction.Denominator * secondFraction.Denominator;

                result = new Fraction(newNumerator, newDenominator);
            }
            return result;
        }

        // Metoden multiply som multiplicerar den först bråktalet med den andra bråktalet och returnerar ett nytt bråktal.
        public static Fraction multiply(Fraction firstFraction, Fraction secondFraction)
        {
            int newNumerator = firstFraction.Numerator * secondFraction.Numerator;
            int newDenominator = firstFraction.Denominator * secondFraction.Denominator;

            return new Fraction(newNumerator, newDenominator);
        }

        // isEqualTo som jämför två Fraction-instanser och ser om de representerar samma bråktal.
        public static bool isEqualTo(Fraction firstFraction, Fraction secondFraction)
        {
            if (firstFraction == secondFraction)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        // toString som returenerar en strängpresentation av bråktalet på form T/N.
        public override string ToString()
        {
            if (isNegative())
            {
                return String.Format("Resultat: {0}/{1} \nBråktalet är negativt", _numerator, _denominator);
            }
            else
            {
                return String.Format("Resultat: {0}/{1} \nBråktalet är positivt", _numerator, _denominator);
            }
        }
    }
}

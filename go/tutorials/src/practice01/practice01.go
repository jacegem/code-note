package practice01

import (
	"fmt"
)

func Sqrt(x float64) float64 {
	z := 1.0

	for i := 0; i < 10; i += 1 {
		z -= (z*z - x) / (2 * z)
		fmt.Println(z)
	}
	return z
}

func Run() {
	fmt.Println(Sqrt(2))
}

package main

import (
	"strings"

	"golang.org/x/tour/wc"
)

func WordCount(s string) map[string]int {
	m := make(map[string]int)
	for _, word := range strings.Fields(s) {
		// _, ok := m[word]
		// if ok {
		// 	m[word] += 1
		// } else {
		// 	m[word] = 1
		// }
		m[word] += 1
	}
	return m
}

func main() {
	wc.Test(WordCount)
}

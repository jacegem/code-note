module example.com/main

go 1.17

replace (
	example.com/hello => ./hello
	example.com/practice01 => ./practice01
	example.com/practice02 => ./practice02
)

require (
	example.com/hello v0.0.0
	example.com/practice01 v0.0.0-00010101000000-000000000000
	example.com/practice02 v0.0.0-00010101000000-000000000000
)

require (
	golang.org/x/text v0.0.0-20170915032832-14c0d48ead0c // indirect
	golang.org/x/tour v0.1.0 // indirect
	rsc.io/quote v1.5.2 // indirect
	rsc.io/sampler v1.3.0 // indirect
)

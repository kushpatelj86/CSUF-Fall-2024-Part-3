// Here’s the equivalent program written in C:

#include <stdio.h>
#include <stddef.h>
#include <string.h>

// This function takes a pointer to the array and its size.
void analyze_slice(const int *slice, size_t len) {
    if (len > 0) {
        printf("First element of the slice: %d\n", slice[0]);
    } else {
        printf("The slice is empty.\n");
    }
    printf("The slice has %zu elements\n", len);
}

int main() {
    // Fixed-size array.
    int xs[5] = {1, 2, 3, 4, 5};

    // All elements initialized to the same value.
    int ys[500] = {0};

    // Indexing starts at 0.
    printf("First element of the array: %d\n", xs[0]);
    printf("Second element of the array: %d\n", xs[1]);

    // `sizeof` gives the total size of the array.
    printf("Number of elements in array: %zu\n", sizeof(xs) / sizeof(xs[0]));

    // Arrays are stack allocated.
    printf("Array occupies %zu bytes\n", sizeof(xs));

    // Arrays can be passed as slices.
    printf("Borrow the whole array as a slice.\n");
    analyze_slice(xs, sizeof(xs) / sizeof(xs[0]));

    // Slices can point to a section of an array.
    printf("Borrow a section of the array as a slice.\n");
    analyze_slice(&ys[1], 3); // ys[1..4] is equivalent to &ys[1] with length 3.

    // Example of an empty array:
    int empty_array[0];
    if (memcmp(empty_array, (int[]){}, 0) == 0) {
        printf("Empty array matches empty literal\n");
    }

    // Safely access array using bounds checking.
    for (size_t i = 0; i <= sizeof(xs) / sizeof(xs[0]); i++) { // Oops, one too far!
        if (i < sizeof(xs) / sizeof(xs[0])) {
            printf("%zu: %d\n", i, xs[i]);
        } else {
            printf("Slow down! %zu is too far!\n", i);
        }
    }

    // Uncommenting the following will cause errors:
    // Out-of-bound indexing on array:
    // printf("%d\n", xs[5]);

    // Out-of-bound indexing on a pointer will cause undefined behavior:
    // printf("%d\n", xs[5]);

    return 0;
}
// Key Points
// Slices: C does not have slices natively like Rust. Instead, a slice is simulated by passing a pointer to the first element and the size of the slice.
// Bounds Checking: C does not perform bounds checking on arrays. Bounds checking needs to be implemented manually.
// Empty Arrays: C allows defining arrays with size 0 in some contexts (e.g., as an extension in GCC or Clang), but behavior varies depending on the compiler.
// This program should work similarly to the Rust code, with differences stemming from C's lack of built-in safety features.
# Resend SDK — Mini Task Report

## Approach

I used Voxgig’s SDK generator with Resend’s official OpenAPI specification to generate a TypeScript SDK with the offline test feature. I used AI assistance to interpret setup errors and prepare a small live-test script, and checked the results through terminal output.

## Results

- SDK scaffolding and generation completed.
- The TypeScript build passed.
- The generated offline tests failed. README and reference examples reported a missing `email_id` parameter, and a suppression-response test showed an assertion failure.
- I attempted a live domain-list request using the generated SDK. It returned `401 Unauthorized`. I did not establish whether the cause was the API key configuration or the generated authentication handling before the time limit.

## Developer experience observations

An existing npm configuration pointed to a former employer’s private registry and initially blocked installation. This was a local environment issue.

The generated documentation provided client setup and operation examples. However, the Domain summary displayed a verification endpoint while listing several operations, making endpoint-to-operation mapping unclear.

The README’s package-name import did not work directly from the generated local project. I switched the live-test script to the compiled local entry point.

## Suggested improvements

- Include a clear example for running the SDK locally before publishing or installing it as a package.
- Show the HTTP method and endpoint for each operation.
- Ensure generated runnable examples include required path parameters.
- Provide troubleshooting guidance for authentication failures.

## Time limit

I stopped technical work when my 30-minute human-work limit was reached. The SDK remains unmodified with respect to the observed test failures.

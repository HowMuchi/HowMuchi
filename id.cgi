#!/usr/bin/perl -w
use CGI;
use DBI;
my $cgi = new CGI;


my $account = $cgi->param('hot');

print "Content-type: text/html\n\n";
print $account;

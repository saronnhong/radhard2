if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3002;
const app = express();

const cors = require('cors'); //needed to disable sendgrid security

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.RADHARD_API_KEY);

app.post("/send-email", function (req, res) {

  const msg = {
    to: req.body.email.sender,
    from: req.body.email.recipient,
    // subject: `RADHARD: Message received from ${req.body.email.subject}`,
    // html: `MESSAGE: ${req.body.email.text}
    // PHONE: ${req.body.email.phone}
    // FROM: ${req.body.email.subject}
    // EMAIL: ${req.body.email.from}`,
    subject: `<!OCTYPE html>
    <html lang="en" style='vertical-align: baseline; --blue: #00bff; --indigo: #6610f2; --purple: #6f42c1; --pink: #e83e8c; --red: #dc34; --orange: #fde14; --yellow: #ffc10; --green: #28a4; --teal: #20c99; --cyan: #1a2b8; --white: #fff; --gray: #6cd; --gray-dark: #343a40; --primary: #00bff; --secondary: #6cd; --success: #28a4; --info: #1a2b8; --warning: #ffc10; --danger: #dc34; --light: #f8f9fa; --dark: #343a40; --breakpoint-xs: 0; --breakpoint-sm: 6px; --breakpoint-md: 68px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px; --font-family-sans-serif: -apple-system,linkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace; box-sizing: border-box; -webkit-text-size-adjust: 100; -webkit-tap-highlight-color: transparent; text-shadow: none !important; box-shadow: none !important; font-style: normal; font-variant: normal; font-weight: normal; font-size: normal; line-height: normal; margin: 0; padding: 0; border: 0;'>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="shortcut icon" href="https://radhard.herokuapp.com/images/sat-blue.png">
    <title>Radhard</title>
    <style>body {
    margin: 0; padding: 0; border: 0; font-size: 100; font: inherit; vertical-align: baseline;
    }
    img {
    margin: 0; padding: 0; border: 0; font-size: 100; font: inherit; vertical-align: baseline;
    }
    body {
    line-height: 1;
    }
    blockquote:before {
    content: none;
    }
    blockquote:after {
    content: none;
    }
    q:before {
    content: none;
    }
    q:after {
    content: none;
    }
    @font-face {
    font-family: 'Nunito Sans'; font-style: normal; font-weight: 200; font-display: swap; src: local('Nunito Sans ExtraLight'), local('NunitoSans-ExtraLight'), url('https://fonts.gstatic.com/s/nunitosans/v/pe03MImSLYIv1o4X1M8cc9yAstU1Q.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Nunito Sans'; font-style: normal; font-weight: 300; font-display: swap; src: local('Nunito Sans Light'), local('NunitoSans-Light'), url('https://fonts.gstatic.com/s/nunitosans/v/pe03MImSLYIv1o4X1M8cc8WActU1Q.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Nunito Sans'; font-style: normal; font-weight: 400; font-display: swap; src: local('Nunito Sans Regular'), local('NunitoSans-Regular'), url('https://fonts.gstatic.com/s/nunitosans/v/pe0qMImSLYIv1o4X1M8cce9I94.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Nunito Sans'; font-style: normal; font-weight: 600; font-display: swap; src: local('Nunito Sans Semiold'), local('NunitoSans-Semiold'), url('https://fonts.gstatic.com/s/nunitosans/v/pe03MImSLYIv1o4X1M8cc9i8tU1Q.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Nunito Sans'; font-style: normal; font-weight: 900; font-display: swap; src: local('Nunito Sans lack'), local('NunitoSans-lack'), url('https://fonts.gstatic.com/s/nunitosans/v/pe03MImSLYIv1o4X1M8cc8-MtU1Q.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Poppins'; font-style: normal; font-weight: 200; font-display: swap; src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'), url('https://fonts.gstatic.com/s/poppins/v9/pxiyp8kv8JHgFVrLFj_Z1xlEA.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Poppins'; font-style: normal; font-weight: 400; font-display: swap; src: local('Poppins Regular'), local('Poppins-Regular'), url('https://fonts.gstatic.com/s/poppins/v9/pxiEyp8kv8JHgFVrJJfedw.ttf') format('truetype');
    }
    @font-face {
    font-family: 'Poppins'; font-style: normal; font-weight: 600; font-display: swap; src: local('Poppins Semiold'), local('Poppins-Semiold'), url('https://fonts.gstatic.com/s/poppins/v9/pxiyp8kv8JHgFVrLEj6Z1xlEA.ttf') format('truetype');
    }
    ::after {
    box-sizing: border-box;
    }
    ::before {
    box-sizing: border-box;
    }
    body {
    margin: 0; font-family: -apple-system,linkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; font-size: 1rem; font-weight: 400; line-height: 1.; color: #21229; text-align: left; background-color: #fff;
    }
    [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
    }
    a:hover {
    color: #006b3; text-decoration: underline;
    }
    a:not([href]):hover {
    color: inherit; text-decoration: none;
    }
    img {
    vertical-align: middle; border-style: none;
    }
    button:focus {
    outline: px auto -webkit-focus-ring-color;
    }
    .blockquote-footer::before {
    content: "\2014\00A0";
    }
    .table-hover tbody tr:hover {
    color: #21229; background-color: rgba(0,0,0,.0);
    }
    .table-hover .table-primary:hover {
    background-color: #9fcdff;
    }
    .table-hover .table-primary:hover>td {
    background-color: #9fcdff;
    }
    .table-hover .table-primary:hover>th {
    background-color: #9fcdff;
    }
    .table-hover .table-secondary:hover {
    background-color: #c8cbcf;
    }
    .table-hover .table-secondary:hover>td {
    background-color: #c8cbcf;
    }
    .table-hover .table-secondary:hover>th {
    background-color: #c8cbcf;
    }
    .table-hover .table-success:hover {
    background-color: #b1dfbb;
    }
    .table-hover .table-success:hover>td {
    background-color: #b1dfbb;
    }
    .table-hover .table-success:hover>th {
    background-color: #b1dfbb;
    }
    .table-hover .table-info:hover {
    background-color: #abdde;
    }
    .table-hover .table-info:hover>td {
    background-color: #abdde;
    }
    .table-hover .table-info:hover>th {
    background-color: #abdde;
    }
    .table-hover .table-warning:hover {
    background-color: #ffe8a1;
    }
    .table-hover .table-warning:hover>td {
    background-color: #ffe8a1;
    }
    .table-hover .table-warning:hover>th {
    background-color: #ffe8a1;
    }
    .table-hover .table-danger:hover {
    background-color: #f1b0b;
    }
    .table-hover .table-danger:hover>td {
    background-color: #f1b0b;
    }
    .table-hover .table-danger:hover>th {
    background-color: #f1b0b;
    }
    .table-hover .table-light:hover {
    background-color: #ececf6;
    }
    .table-hover .table-light:hover>td {
    background-color: #ececf6;
    }
    .table-hover .table-light:hover>th {
    background-color: #ececf6;
    }
    .table-hover .table-dark:hover {
    background-color: #b9bbbe;
    }
    .table-hover .table-dark:hover>td {
    background-color: #b9bbbe;
    }
    .table-hover .table-dark:hover>th {
    background-color: #b9bbbe;
    }
    .table-hover .table-active:hover {
    background-color: rgba(0,0,0,.0);
    }
    .table-hover .table-active:hover>td {
    background-color: rgba(0,0,0,.0);
    }
    .table-hover .table-active:hover>th {
    background-color: rgba(0,0,0,.0);
    }
    .table-dark.table-hover tbody tr:hover {
    color: #fff; background-color: rgba(2,2,2,.0);
    }
    .form-control:focus {
    color: #490; background-color: #fff; border-color: #80bdff; outline: 0; box-shadow: 0 0 0 .2rem rgba(0,123,2,.2);
    }
    select.form-control:focus::-ms-value {
    color: #490; background-color: #fff;
    }
    .form-control.is-valid:focus {
    border-color: #28a4; box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .was-validated .form-control:valid:focus {
    border-color: #28a4; box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .custom-select.is-valid:focus {
    border-color: #28a4; box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .was-validated .custom-select:valid:focus {
    border-color: #28a4; box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .custom-control-input.is-valid~.custom-control-label::before {
    border-color: #28a4;
    }
    .was-validated .custom-control-input:valid~.custom-control-label::before {
    border-color: #28a4;
    }
    .custom-control-input.is-valid:checked~.custom-control-label::before {
    border-color: #34ce; background-color: #34ce;
    }
    .was-validated .custom-control-input:valid:checked~.custom-control-label::before {
    border-color: #34ce; background-color: #34ce;
    }
    .custom-control-input.is-valid:focus~.custom-control-label::before {
    box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .was-validated .custom-control-input:valid:focus~.custom-control-label::before {
    box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before {
    border-color: #28a4;
    }
    .was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before {
    border-color: #28a4;
    }
    .custom-file-input.is-valid:focus~.custom-file-label {
    border-color: #28a4; box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .was-validated .custom-file-input:valid:focus~.custom-file-label {
    border-color: #28a4; box-shadow: 0 0 0 .2rem rgba(40,16,69,.2);
    }
    .form-control.is-invalid:focus {
    border-color: #dc34; box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .was-validated .form-control:invalid:focus {
    border-color: #dc34; box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .custom-select.is-invalid:focus {
    border-color: #dc34; box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .was-validated .custom-select:invalid:focus {
    border-color: #dc34; box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .custom-control-input.is-invalid~.custom-control-label::before {
    border-color: #dc34;
    }
    .was-validated .custom-control-input:invalid~.custom-control-label::before {
    border-color: #dc34;
    }
    .custom-control-input.is-invalid:checked~.custom-control-label::before {
    border-color: #e4606d; background-color: #e4606d;
    }
    .was-validated .custom-control-input:invalid:checked~.custom-control-label::before {
    border-color: #e4606d; background-color: #e4606d;
    }
    .custom-control-input.is-invalid:focus~.custom-control-label::before {
    box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .was-validated .custom-control-input:invalid:focus~.custom-control-label::before {
    box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before {
    border-color: #dc34;
    }
    .was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before {
    border-color: #dc34;
    }
    .custom-file-input.is-invalid:focus~.custom-file-label {
    border-color: #dc34; box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .was-validated .custom-file-input:invalid:focus~.custom-file-label {
    border-color: #dc34; box-shadow: 0 0 0 .2rem rgba(220,3,69,.2);
    }
    .btn:hover {
    color: #21229; text-decoration: none;
    }
    .btn:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(0,123,2,.2);
    }
    .btn-primary:hover {
    color: #fff; background-color: #0069d9; border-color: #0062cc;
    }
    .btn-primary:focus {
    color: #fff; background-color: #0069d9; border-color: #0062cc; box-shadow: 0 0 0 .2rem rgba(38,143,2,.);
    }
    .btn-primary:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #0062cc; border-color: #00cbf;
    }
    .btn-primary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(38,143,2,.);
    }
    .btn-primary:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(38,143,2,.);
    }
    .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(38,143,2,.);
    }
    .btn-secondary:hover {
    color: #fff; background-color: #a6268; border-color: #4b62;
    }
    .btn-secondary:focus {
    color: #fff; background-color: #a6268; border-color: #4b62; box-shadow: 0 0 0 .2rem rgba(130,138,14,.);
    }
    .btn-secondary:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #4b62; border-color: #4eb;
    }
    .btn-secondary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(130,138,14,.);
    }
    .btn-secondary:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(130,138,14,.);
    }
    .show>.btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(130,138,14,.);
    }
    .btn-success:hover {
    color: #fff; background-color: #218838; border-color: #1ee34;
    }
    .btn-success:focus {
    color: #fff; background-color: #218838; border-color: #1ee34; box-shadow: 0 0 0 .2rem rgba(2,180,9,.);
    }
    .btn-success:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #1ee34; border-color: #1c430;
    }
    .btn-success:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(2,180,9,.);
    }
    .btn-success:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(2,180,9,.);
    }
    .show>.btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(2,180,9,.);
    }
    .btn-info:hover {
    color: #fff; background-color: #138496; border-color: #11a8b;
    }
    .btn-info:focus {
    color: #fff; background-color: #138496; border-color: #11a8b; box-shadow: 0 0 0 .2rem rgba(8,16,19,.);
    }
    .btn-info:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #11a8b; border-color: #100f;
    }
    .btn-info:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(8,16,19,.);
    }
    .btn-info:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(8,16,19,.);
    }
    .show>.btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(8,16,19,.);
    }
    .btn-warning:hover {
    color: #21229; background-color: #e0a800; border-color: #d39e00;
    }
    .btn-warning:focus {
    color: #21229; background-color: #e0a800; border-color: #d39e00; box-shadow: 0 0 0 .2rem rgba(222,10,12,.);
    }
    .btn-warning:not(:disabled):not(.disabled):active {
    color: #21229; background-color: #d39e00; border-color: #c6900;
    }
    .btn-warning:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(222,10,12,.);
    }
    .btn-warning:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(222,10,12,.);
    }
    .show>.btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(222,10,12,.);
    }
    .btn-danger:hover {
    color: #fff; background-color: #c82333; border-color: #bd2130;
    }
    .btn-danger:focus {
    color: #fff; background-color: #c82333; border-color: #bd2130; box-shadow: 0 0 0 .2rem rgba(22,83,9,.);
    }
    .btn-danger:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #bd2130; border-color: #b21f2d;
    }
    .btn-danger:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(22,83,9,.);
    }
    .btn-danger:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(22,83,9,.);
    }
    .show>.btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(22,83,9,.);
    }
    .btn-light:hover {
    color: #21229; background-color: #e2e6ea; border-color: #dae0e;
    }
    .btn-light:focus {
    color: #21229; background-color: #e2e6ea; border-color: #dae0e; box-shadow: 0 0 0 .2rem rgba(216,21,219,.);
    }
    .btn-light:not(:disabled):not(.disabled):active {
    color: #21229; background-color: #dae0e; border-color: #d3d9df;
    }
    .btn-light:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(216,21,219,.);
    }
    .btn-light:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(216,21,219,.);
    }
    .show>.btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(216,21,219,.);
    }
    .btn-dark:hover {
    color: #fff; background-color: #2322b; border-color: #1d2124;
    }
    .btn-dark:focus {
    color: #fff; background-color: #2322b; border-color: #1d2124; box-shadow: 0 0 0 .2rem rgba(82,88,93,.);
    }
    .btn-dark:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #1d2124; border-color: #11a1d;
    }
    .btn-dark:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(82,88,93,.);
    }
    .btn-dark:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(82,88,93,.);
    }
    .show>.btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(82,88,93,.);
    }
    .btn-outline-primary:hover {
    color: #fff; background-color: #00bff; border-color: #00bff;
    }
    .btn-outline-primary:focus {
    box-shadow: 0 0 0 .2rem rgba(0,123,2,.);
    }
    .btn-outline-primary:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #00bff; border-color: #00bff;
    }
    .btn-outline-primary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(0,123,2,.);
    }
    .btn-outline-primary:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(0,123,2,.);
    }
    .show>.btn-outline-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(0,123,2,.);
    }
    .btn-outline-secondary:hover {
    color: #fff; background-color: #6cd; border-color: #6cd;
    }
    .btn-outline-secondary:focus {
    box-shadow: 0 0 0 .2rem rgba(108,11,12,.);
    }
    .btn-outline-secondary:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #6cd; border-color: #6cd;
    }
    .btn-outline-secondary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(108,11,12,.);
    }
    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(108,11,12,.);
    }
    .show>.btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(108,11,12,.);
    }
    .btn-outline-success:hover {
    color: #fff; background-color: #28a4; border-color: #28a4;
    }
    .btn-outline-success:focus {
    box-shadow: 0 0 0 .2rem rgba(40,16,69,.);
    }
    .btn-outline-success:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #28a4; border-color: #28a4;
    }
    .btn-outline-success:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(40,16,69,.);
    }
    .btn-outline-success:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(40,16,69,.);
    }
    .show>.btn-outline-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(40,16,69,.);
    }
    .btn-outline-info:hover {
    color: #fff; background-color: #1a2b8; border-color: #1a2b8;
    }
    .btn-outline-info:focus {
    box-shadow: 0 0 0 .2rem rgba(23,162,184,.);
    }
    .btn-outline-info:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #1a2b8; border-color: #1a2b8;
    }
    .btn-outline-info:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(23,162,184,.);
    }
    .btn-outline-info:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(23,162,184,.);
    }
    .show>.btn-outline-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(23,162,184,.);
    }
    .btn-outline-warning:hover {
    color: #21229; background-color: #ffc10; border-color: #ffc10;
    }
    .btn-outline-warning:focus {
    box-shadow: 0 0 0 .2rem rgba(2,193,,.);
    }
    .btn-outline-warning:not(:disabled):not(.disabled):active {
    color: #21229; background-color: #ffc10; border-color: #ffc10;
    }
    .btn-outline-warning:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(2,193,,.);
    }
    .btn-outline-warning:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(2,193,,.);
    }
    .show>.btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(2,193,,.);
    }
    .btn-outline-danger:hover {
    color: #fff; background-color: #dc34; border-color: #dc34;
    }
    .btn-outline-danger:focus {
    box-shadow: 0 0 0 .2rem rgba(220,3,69,.);
    }
    .btn-outline-danger:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #dc34; border-color: #dc34;
    }
    .btn-outline-danger:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(220,3,69,.);
    }
    .btn-outline-danger:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(220,3,69,.);
    }
    .show>.btn-outline-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(220,3,69,.);
    }
    .btn-outline-light:hover {
    color: #21229; background-color: #f8f9fa; border-color: #f8f9fa;
    }
    .btn-outline-light:focus {
    box-shadow: 0 0 0 .2rem rgba(248,249,20,.);
    }
    .btn-outline-light:not(:disabled):not(.disabled):active {
    color: #21229; background-color: #f8f9fa; border-color: #f8f9fa;
    }
    .btn-outline-light:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(248,249,20,.);
    }
    .btn-outline-light:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(248,249,20,.);
    }
    .show>.btn-outline-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(248,249,20,.);
    }
    .btn-outline-dark:hover {
    color: #fff; background-color: #343a40; border-color: #343a40;
    }
    .btn-outline-dark:focus {
    box-shadow: 0 0 0 .2rem rgba(2,8,64,.);
    }
    .btn-outline-dark:not(:disabled):not(.disabled):active {
    color: #fff; background-color: #343a40; border-color: #343a40;
    }
    .btn-outline-dark:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 .2rem rgba(2,8,64,.);
    }
    .btn-outline-dark:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 .2rem rgba(2,8,64,.);
    }
    .show>.btn-outline-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 .2rem rgba(2,8,64,.);
    }
    .btn-link:hover {
    color: #006b3; text-decoration: underline;
    }
    .btn-link:focus {
    text-decoration: underline; box-shadow: none;
    }
    .dropdown-toggle::after {
    display: inline-block; margin-left: .2em; vertical-align: .2em; content: ""; border-top: .3em solid; border-right: .3em solid transparent; border-bottom: 0; border-left: .3em solid transparent;
    }
    .dropdown-toggle:empty::after {
    margin-left: 0;
    }
    .dropup .dropdown-toggle::after {
    display: inline-block; margin-left: .2em; vertical-align: .2em; content: ""; border-top: 0; border-right: .3em solid transparent; border-bottom: .3em solid; border-left: .3em solid transparent;
    }
    .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
    }
    .dropright .dropdown-toggle::after {
    display: inline-block; margin-left: .2em; vertical-align: .2em; content: ""; border-top: .3em solid transparent; border-right: 0; border-bottom: .3em solid transparent; border-left: .3em solid;
    }
    .dropright .dropdown-toggle:empty::after {
    margin-left: 0;
    }
    .dropright .dropdown-toggle::after {
    vertical-align: 0;
    }
    .dropleft .dropdown-toggle::after {
    display: inline-block; margin-left: .2em; vertical-align: .2em; content: "";
    }
    .dropleft .dropdown-toggle::after {
    display: none;
    }
    .dropleft .dropdown-toggle::before {
    display: inline-block; margin-right: .2em; vertical-align: .2em; content: ""; border-top: .3em solid transparent; border-right: .3em solid; border-bottom: .3em solid transparent;
    }
    .dropleft .dropdown-toggle:empty::after {
    margin-left: 0;
    }
    .dropleft .dropdown-toggle::before {
    vertical-align: 0;
    }
    .dropdown-item:focus {
    color: #16181b; text-decoration: none; background-color: #f8f9fa;
    }
    .dropdown-item:hover {
    color: #16181b; text-decoration: none; background-color: #f8f9fa;
    }
    .dropdown-item:active {
    color: #fff; text-decoration: none; background-color: #00bff;
    }
    .btn-group-vertical>.btn:hover {
    z-index: 1;
    }
    .btn-group>.btn:hover {
    z-index: 1;
    }
    .btn-group-vertical>.btn:active {
    z-index: 1;
    }
    .btn-group-vertical>.btn:focus {
    z-index: 1;
    }
    .btn-group>.btn:active {
    z-index: 1;
    }
    .btn-group>.btn:focus {
    z-index: 1;
    }
    .dropdown-toggle-split::after {
    margin-left: 0;
    }
    .dropright .dropdown-toggle-split::after {
    margin-left: 0;
    }
    .dropup .dropdown-toggle-split::after {
    margin-left: 0;
    }
    .dropleft .dropdown-toggle-split::before {
    margin-right: 0;
    }
    .input-group>.custom-file .custom-file-input:focus~.custom-file-label {
    z-index: 3;
    }
    .input-group>.custom-select:focus {
    z-index: 3;
    }
    .input-group>.form-control:focus {
    z-index: 3;
    }
    .input-group>.custom-file .custom-file-input:focus {
    z-index: 4;
    }
    .input-group>.custom-file:not(:last-child) .custom-file-label::after {
    border-top-right-radius: 0; border-bottom-right-radius: 0;
    }
    .input-group-append .btn:focus {
    z-index: 3;
    }
    .input-group-prepend .btn:focus {
    z-index: 3;
    }
    .custom-control-input:checked~.custom-control-label::before {
    color: #fff; border-color: #00bff; background-color: #00bff;
    }
    .custom-control-input:focus~.custom-control-label::before {
    box-shadow: 0 0 0 .2rem rgba(0,123,2,.2);
    }
    .custom-control-input:focus:not(:checked)~.custom-control-label::before {
    border-color: #80bdff;
    }
    .custom-control-input:not(:disabled):active~.custom-control-label::before {
    color: #fff; background-color: #b3dff; border-color: #b3dff;
    }
    .custom-control-input:disabled~.custom-control-label::before {
    background-color: #e9ecef;
    }
    .custom-control-input[disabled]~.custom-control-label::before {
    background-color: #e9ecef;
    }
    .custom-control-label::before {
    position: absolute; top: .2rem; left: -1.rem; display: block; width: 1rem; height: 1rem; pointer-events: none; content: ""; background-color: #fff; border: #adbbd solid 1px;
    }
    .custom-control-label::after {
    position: absolute; top: .2rem; left: -1.rem; display: block; width: 1rem; height: 1rem; content: ""; background: no-repeat 0/0 0;
    }
    .custom-checkbox .custom-control-label::before {
    border-radius: .2rem;
    }
    .custom-checkbox .custom-control-input:checked~.custom-control-label::after {
    background-image: url('data:image/svg+xml,3csvg xmlns=http://www.w3.org/2000/svg width=8 height=8 viewox=0 0 8 83e3cpath fill=23fff d=M6.64.l-3.9 3.612-1.38-1.L0 4.26l2.94 2.99L8 2.193z/3e3c/svg3e');
    }
    .custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
    border-color: #00bff; background-color: #00bff;
    }
    .custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
    background-image: url('data:image/svg+xml,3csvg xmlns=http://www.w3.org/2000/svg width=4 height=4 viewox=0 0 4 43e3cpath stroke=23fff d=M0 2h4/3e3c/svg3e');
    }
    .custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
    background-color: rgba(0,123,2,.);
    }
    .custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
    background-color: rgba(0,123,2,.);
    }
    .custom-radio .custom-control-label::before {
    border-radius: 0;
    }
    .custom-radio .custom-control-input:checked~.custom-control-label::after {
    background-image: url('data:image/svg+xml,3csvg xmlns=http://www.w3.org/2000/svg width=12 height=12 viewox=-4 -4 8 83e3ccircle r=3 fill=23fff/3e3c/svg3e');
    }
    .custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
    background-color: rgba(0,123,2,.);
    }
    .custom-switch .custom-control-label::before {
    left: -2.2rem; width: 1.rem; pointer-events: all; border-radius: .rem;
    }
    .custom-switch .custom-control-label::after {
    top: calc(.2rem + 2px); left: calc(-2.2rem + 2px); width: calc(1rem - 4px); height: calc(1rem - 4px); background-color: #adbbd; border-radius: .rem; transition: transform .1s ease-in-out,background-color .1s ease-in-out,border-color .1s ease-in-out,box-shadow .1s ease-in-out,-webkit-transform .1s ease-in-out;
    }
    .custom-switch .custom-control-input:checked~.custom-control-label::after {
    background-color: #fff; -webkit-transform: translateX(.rem); transform: translateX(.rem);
    }
    .custom-switch .custom-control-input:disabled:checked~.custom-control-label::before {
    background-color: rgba(0,123,2,.);
    }
    .custom-select:focus {
    border-color: #80bdff; outline: 0; box-shadow: 0 0 0 .2rem rgba(0,123,2,.2);
    }
    .custom-select:focus::-ms-value {
    color: #490; background-color: #fff;
    }
    .custom-file-input:focus~.custom-file-label {
    border-color: #80bdff; box-shadow: 0 0 0 .2rem rgba(0,123,2,.2);
    }
    .custom-file-input:lang(en)~.custom-file-label::after {
    content: "rowse";
    }
    .custom-file-input~.custom-file-label[data-browse]::after {
    content: attr(data-browse);
    }
    .custom-file-label::after {
    position: absolute; top: 0; right: 0; bottom: 0; z-index: 3; display: block; height: calc(1.em + .rem); padding: .3rem .rem; line-height: 1.; color: #490; content: "rowse"; background-color: #e9ecef; border-left: inherit; border-radius: 0 .2rem .2rem 0;
    }
    .custom-range:focus {
    outline: 0;
    }
    .custom-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,2,.2);
    }
    .custom-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,2,.2);
    }
    .custom-range:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,2,.2);
    }
    .custom-range::-webkit-slider-thumb:active {
    background-color: #b3dff;
    }
    .custom-range::-moz-range-thumb:active {
    background-color: #b3dff;
    }
    .custom-range::-ms-thumb:active {
    background-color: #b3dff;
    }
    .custom-control-label::before {
    transition: background-color .1s ease-in-out,border-color .1s ease-in-out,box-shadow .1s ease-in-out;
    }
    .nav-link:focus {
    text-decoration: none;
    }
    .nav-link:hover {
    text-decoration: none;
    }
    .nav-tabs .nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
    }
    .nav-tabs .nav-link:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
    }
    .navbar-brand:focus {
    text-decoration: none;
    }
    .navbar-brand:hover {
    text-decoration: none;
    }
    .navbar-toggler:focus {
    text-decoration: none;
    }
    .navbar-toggler:hover {
    text-decoration: none;
    }
    .navbar-light .navbar-brand:focus {
    color: rgba(0,0,0,.9);
    }
    .navbar-light .navbar-brand:hover {
    color: rgba(0,0,0,.9);
    }
    .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0,0,0,.);
    }
    .navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0,0,0,.);
    }
    .navbar-light .navbar-text a:focus {
    color: rgba(0,0,0,.9);
    }
    .navbar-light .navbar-text a:hover {
    color: rgba(0,0,0,.9);
    }
    .navbar-dark .navbar-brand:focus {
    color: #fff;
    }
    .navbar-dark .navbar-brand:hover {
    color: #fff;
    }
    .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(2,2,2,.);
    }
    .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(2,2,2,.);
    }
    .navbar-dark .navbar-text a:focus {
    color: #fff;
    }
    .navbar-dark .navbar-text a:hover {
    color: #fff;
    }
    .card-link:hover {
    text-decoration: none;
    }
    .breadcrumb-item+.breadcrumb-item::before {
    display: inline-block; padding-right: .rem; color: #6cd; content: "/";
    }
    .breadcrumb-item+.breadcrumb-item:hover::before {
    text-decoration: underline;
    }
    .breadcrumb-item+.breadcrumb-item:hover::before {
    text-decoration: none;
    }
    .page-link:hover {
    z-index: 2; color: #006b3; text-decoration: none; background-color: #e9ecef; border-color: #dee2e6;
    }
    .page-link:focus {
    z-index: 3; outline: 0; box-shadow: 0 0 0 .2rem rgba(0,123,2,.2);
    }
    a.badge:focus {
    text-decoration: none;
    }
    a.badge:hover {
    text-decoration: none;
    }
    a.badge-primary:focus {
    color: #fff; background-color: #0062cc;
    }
    a.badge-primary:hover {
    color: #fff; background-color: #0062cc;
    }
    a.badge-primary:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(0,123,2,.);
    }
    a.badge-secondary:focus {
    color: #fff; background-color: #4b62;
    }
    a.badge-secondary:hover {
    color: #fff; background-color: #4b62;
    }
    a.badge-secondary:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(108,11,12,.);
    }
    a.badge-success:focus {
    color: #fff; background-color: #1ee34;
    }
    a.badge-success:hover {
    color: #fff; background-color: #1ee34;
    }
    a.badge-success:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(40,16,69,.);
    }
    a.badge-info:focus {
    color: #fff; background-color: #11a8b;
    }
    a.badge-info:hover {
    color: #fff; background-color: #11a8b;
    }
    a.badge-info:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(23,162,184,.);
    }
    a.badge-warning:focus {
    color: #21229; background-color: #d39e00;
    }
    a.badge-warning:hover {
    color: #21229; background-color: #d39e00;
    }
    a.badge-warning:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(2,193,,.);
    }
    a.badge-danger:focus {
    color: #fff; background-color: #bd2130;
    }
    a.badge-danger:hover {
    color: #fff; background-color: #bd2130;
    }
    a.badge-danger:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(220,3,69,.);
    }
    a.badge-light:focus {
    color: #21229; background-color: #dae0e;
    }
    a.badge-light:hover {
    color: #21229; background-color: #dae0e;
    }
    a.badge-light:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(248,249,20,.);
    }
    a.badge-dark:focus {
    color: #fff; background-color: #1d2124;
    }
    a.badge-dark:hover {
    color: #fff; background-color: #1d2124;
    }
    a.badge-dark:focus {
    outline: 0; box-shadow: 0 0 0 .2rem rgba(2,8,64,.);
    }
    @-webkit-keyframes progress-bar-stripes {
    
    }
    @keyframes progress-bar-stripes {
    
    }
    .list-group-item-action:focus {
    z-index: 1; color: #490; text-decoration: none; background-color: #f8f9fa;
    }
    .list-group-item-action:hover {
    z-index: 1; color: #490; text-decoration: none; background-color: #f8f9fa;
    }
    .list-group-item-action:active {
    color: #21229; background-color: #e9ecef;
    }
    .list-group-item-primary.list-group-item-action:focus {
    color: #00408; background-color: #9fcdff;
    }
    .list-group-item-primary.list-group-item-action:hover {
    color: #00408; background-color: #9fcdff;
    }
    .list-group-item-secondary.list-group-item-action:focus {
    color: #383d41; background-color: #c8cbcf;
    }
    .list-group-item-secondary.list-group-item-action:hover {
    color: #383d41; background-color: #c8cbcf;
    }
    .list-group-item-success.list-group-item-action:focus {
    color: #124; background-color: #b1dfbb;
    }
    .list-group-item-success.list-group-item-action:hover {
    color: #124; background-color: #b1dfbb;
    }
    .list-group-item-info.list-group-item-action:focus {
    color: #0c460; background-color: #abdde;
    }
    .list-group-item-info.list-group-item-action:hover {
    color: #0c460; background-color: #abdde;
    }
    .list-group-item-warning.list-group-item-action:focus {
    color: #86404; background-color: #ffe8a1;
    }
    .list-group-item-warning.list-group-item-action:hover {
    color: #86404; background-color: #ffe8a1;
    }
    .list-group-item-danger.list-group-item-action:focus {
    color: #21c24; background-color: #f1b0b;
    }
    .list-group-item-danger.list-group-item-action:hover {
    color: #21c24; background-color: #f1b0b;
    }
    .list-group-item-light.list-group-item-action:focus {
    color: #818182; background-color: #ececf6;
    }
    .list-group-item-light.list-group-item-action:hover {
    color: #818182; background-color: #ececf6;
    }
    .list-group-item-dark.list-group-item-action:focus {
    color: #1b1e21; background-color: #b9bbbe;
    }
    .list-group-item-dark.list-group-item-action:hover {
    color: #1b1e21; background-color: #b9bbbe;
    }
    .close:hover {
    color: #000; text-decoration: none;
    }
    .close:not(:disabled):not(.disabled):focus {
    opacity: .;
    }
    .close:not(:disabled):not(.disabled):hover {
    opacity: .;
    }
    .modal-dialog-centered::before {
    display: block; height: calc(100vh - 1rem); content: "";
    }
    .modal-dialog-centered.modal-dialog-scrollable::before {
    content: none;
    }
    .tooltip .arrow::before {
    position: absolute; content: ""; border-color: transparent; border-style: solid;
    }
    .bs-tooltip-auto[x-placement^=top] .arrow::before {
    top: 0; border-width: .4rem .4rem 0; border-top-color: #000;
    }
    .bs-tooltip-top .arrow::before {
    top: 0; border-width: .4rem .4rem 0; border-top-color: #000;
    }
    .bs-tooltip-auto[x-placement^=right] .arrow::before {
    right: 0; border-width: .4rem .4rem .4rem 0; border-right-color: #000;
    }
    .bs-tooltip-right .arrow::before {
    right: 0; border-width: .4rem .4rem .4rem 0; border-right-color: #000;
    }
    .bs-tooltip-auto[x-placement^=bottom] .arrow::before {
    bottom: 0; border-width: 0 .4rem .4rem; border-bottom-color: #000;
    }
    .bs-tooltip-bottom .arrow::before {
    bottom: 0; border-width: 0 .4rem .4rem; border-bottom-color: #000;
    }
    .bs-tooltip-auto[x-placement^=left] .arrow::before {
    left: 0; border-width: .4rem 0 .4rem .4rem; border-left-color: #000;
    }
    .bs-tooltip-left .arrow::before {
    left: 0; border-width: .4rem 0 .4rem .4rem; border-left-color: #000;
    }
    .popover .arrow::after {
    position: absolute; display: block; content: ""; border-color: transparent; border-style: solid;
    }
    .popover .arrow::before {
    position: absolute; display: block; content: ""; border-color: transparent; border-style: solid;
    }
    .bs-popover-auto[x-placement^=top]>.arrow::before {
    bottom: 0; border-width: .rem .rem 0; border-top-color: rgba(0,0,0,.2);
    }
    .bs-popover-top>.arrow::before {
    bottom: 0; border-width: .rem .rem 0; border-top-color: rgba(0,0,0,.2);
    }
    .bs-popover-auto[x-placement^=top]>.arrow::after {
    bottom: 1px; border-width: .rem .rem 0; border-top-color: #fff;
    }
    .bs-popover-top>.arrow::after {
    bottom: 1px; border-width: .rem .rem 0; border-top-color: #fff;
    }
    .bs-popover-auto[x-placement^=right]>.arrow::before {
    left: 0; border-width: .rem .rem .rem 0; border-right-color: rgba(0,0,0,.2);
    }
    .bs-popover-right>.arrow::before {
    left: 0; border-width: .rem .rem .rem 0; border-right-color: rgba(0,0,0,.2);
    }
    .bs-popover-auto[x-placement^=right]>.arrow::after {
    left: 1px; border-width: .rem .rem .rem 0; border-right-color: #fff;
    }
    .bs-popover-right>.arrow::after {
    left: 1px; border-width: .rem .rem .rem 0; border-right-color: #fff;
    }
    .bs-popover-auto[x-placement^=bottom]>.arrow::before {
    top: 0; border-width: 0 .rem .rem .rem; border-bottom-color: rgba(0,0,0,.2);
    }
    .bs-popover-bottom>.arrow::before {
    top: 0; border-width: 0 .rem .rem .rem; border-bottom-color: rgba(0,0,0,.2);
    }
    .bs-popover-auto[x-placement^=bottom]>.arrow::after {
    top: 1px; border-width: 0 .rem .rem .rem; border-bottom-color: #fff;
    }
    .bs-popover-bottom>.arrow::after {
    top: 1px; border-width: 0 .rem .rem .rem; border-bottom-color: #fff;
    }
    .bs-popover-auto[x-placement^=bottom] .popover-header::before {
    position: absolute; top: 0; left: 0; display: block; width: 1rem; margin-left: -.rem; content: ""; border-bottom: 1px solid #fff;
    }
    .bs-popover-bottom .popover-header::before {
    position: absolute; top: 0; left: 0; display: block; width: 1rem; margin-left: -.rem; content: ""; border-bottom: 1px solid #fff;
    }
    .bs-popover-auto[x-placement^=left]>.arrow::before {
    right: 0; border-width: .rem 0 .rem .rem; border-left-color: rgba(0,0,0,.2);
    }
    .bs-popover-left>.arrow::before {
    right: 0; border-width: .rem 0 .rem .rem; border-left-color: rgba(0,0,0,.2);
    }
    .bs-popover-auto[x-placement^=left]>.arrow::after {
    right: 1px; border-width: .rem 0 .rem .rem; border-left-color: #fff;
    }
    .bs-popover-left>.arrow::after {
    right: 1px; border-width: .rem 0 .rem .rem; border-left-color: #fff;
    }
    .carousel-inner::after {
    display: block; clear: both; content: "";
    }
    .carousel-control-next:focus {
    color: #fff; text-decoration: none; outline: 0; opacity: .9;
    }
    .carousel-control-next:hover {
    color: #fff; text-decoration: none; outline: 0; opacity: .9;
    }
    .carousel-control-prev:focus {
    color: #fff; text-decoration: none; outline: 0; opacity: .9;
    }
    .carousel-control-prev:hover {
    color: #fff; text-decoration: none; outline: 0; opacity: .9;
    }
    @-webkit-keyframes spinner-border {
    
    }
    @keyframes spinner-border {
    
    }
    @-webkit-keyframes spinner-grow {
    
    }
    @keyframes spinner-grow {
    
    }
    a.bg-primary:focus {
    background-color: #0062cc !important;
    }
    a.bg-primary:hover {
    background-color: #0062cc !important;
    }
    button.bg-primary:focus {
    background-color: #0062cc !important;
    }
    button.bg-primary:hover {
    background-color: #0062cc !important;
    }
    a.bg-secondary:focus {
    background-color: #4b62 !important;
    }
    a.bg-secondary:hover {
    background-color: #4b62 !important;
    }
    button.bg-secondary:focus {
    background-color: #4b62 !important;
    }
    button.bg-secondary:hover {
    background-color: #4b62 !important;
    }
    a.bg-success:focus {
    background-color: #1ee34 !important;
    }
    a.bg-success:hover {
    background-color: #1ee34 !important;
    }
    button.bg-success:focus {
    background-color: #1ee34 !important;
    }
    button.bg-success:hover {
    background-color: #1ee34 !important;
    }
    a.bg-info:focus {
    background-color: #11a8b !important;
    }
    a.bg-info:hover {
    background-color: #11a8b !important;
    }
    button.bg-info:focus {
    background-color: #11a8b !important;
    }
    button.bg-info:hover {
    background-color: #11a8b !important;
    }
    a.bg-warning:focus {
    background-color: #d39e00 !important;
    }
    a.bg-warning:hover {
    background-color: #d39e00 !important;
    }
    button.bg-warning:focus {
    background-color: #d39e00 !important;
    }
    button.bg-warning:hover {
    background-color: #d39e00 !important;
    }
    a.bg-danger:focus {
    background-color: #bd2130 !important;
    }
    a.bg-danger:hover {
    background-color: #bd2130 !important;
    }
    button.bg-danger:focus {
    background-color: #bd2130 !important;
    }
    button.bg-danger:hover {
    background-color: #bd2130 !important;
    }
    a.bg-light:focus {
    background-color: #dae0e !important;
    }
    a.bg-light:hover {
    background-color: #dae0e !important;
    }
    button.bg-light:focus {
    background-color: #dae0e !important;
    }
    button.bg-light:hover {
    background-color: #dae0e !important;
    }
    a.bg-dark:focus {
    background-color: #1d2124 !important;
    }
    a.bg-dark:hover {
    background-color: #1d2124 !important;
    }
    button.bg-dark:focus {
    background-color: #1d2124 !important;
    }
    button.bg-dark:hover {
    background-color: #1d2124 !important;
    }
    .clearfix::after {
    display: block; clear: both; content: "";
    }
    .embed-responsive::before {
    display: block; content: "";
    }
    .embed-responsive-21by9::before {
    padding-top: 42.8143;
    }
    .embed-responsive-16by9::before {
    padding-top: 6.2;
    }
    .embed-responsive-4by3::before {
    padding-top: ;
    }
    .embed-responsive-1by1::before {
    padding-top: 100;
    }
    @supports ((position:-webkit-sticky) or (position:sticky)) {
    
    }
    .sr-only-focusable:active {
    position: static; width: auto; height: auto; overflow: visible; clip: auto; white-space: normal;
    }
    .sr-only-focusable:focus {
    position: static; width: auto; height: auto; overflow: visible; clip: auto; white-space: normal;
    }
    .stretched-link::after {
    position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; pointer-events: auto; content: ""; background-color: rgba(0,0,0,0);
    }
    a.text-primary:focus {
    color: #006b3 !important;
    }
    a.text-primary:hover {
    color: #006b3 !important;
    }
    a.text-secondary:focus {
    color: #494f4 !important;
    }
    a.text-secondary:hover {
    color: #494f4 !important;
    }
    a.text-success:focus {
    color: #19692c !important;
    }
    a.text-success:hover {
    color: #19692c !important;
    }
    a.text-info:focus {
    color: #0f664 !important;
    }
    a.text-info:hover {
    color: #0f664 !important;
    }
    a.text-warning:focus {
    color: #ba8b00 !important;
    }
    a.text-warning:hover {
    color: #ba8b00 !important;
    }
    a.text-danger:focus {
    color: #a1d2a !important;
    }
    a.text-danger:hover {
    color: #a1d2a !important;
    }
    a.text-light:focus {
    color: #cbd3da !important;
    }
    a.text-light:hover {
    color: #cbd3da !important;
    }
    a.text-dark:focus {
    color: #121416 !important;
    }
    a.text-dark:hover {
    color: #121416 !important;
    }
    img {
    page-break-inside: avoid;
    }
    body {
    min-width: 992px !important;
    }
    body {
    margin: 0; padding: 0;
    }
    .navarLogo:hover {
    color: #141414;
    }
    .nav-link:hover {
    border-bottom: 3px solid #099bca; color: #099bca !important; font-weight: 600;
    }
    .contactUstn:hover {
    background-color: #0499;
    }
    .contactetails:hover {
    color: #2e2f30;
    }
    @media (min-width:6px) {
      .container {
        max-width: 40px;
      }
      .container {
        max-width: 40px;
      }
      .container-sm {
        max-width: 40px;
      }
      .col-sm {
        -ms-flex-preferred-size: 0; flex-basis: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100;
      }
      .row-cols-sm-1>* {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .row-cols-sm-2>* {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .row-cols-sm-3>* {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .row-cols-sm-4>* {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .row-cols-sm->* {
        -ms-flex: 0 0 20; flex: 0 0 20; max-width: 20;
      }
      .row-cols-sm-6>* {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-sm-auto {
        -ms-flex: 0 0 auto; flex: 0 0 auto; width: auto; max-width: 100;
      }
      .col-sm-1 {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-sm-2 {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-sm-3 {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .col-sm-4 {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .col-sm- {
        -ms-flex: 0 0 41.66666; flex: 0 0 41.66666; max-width: 41.66666;
      }
      .col-sm-6 {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .col-sm- {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-sm-8 {
        -ms-flex: 0 0 66.66666; flex: 0 0 66.66666; max-width: 66.66666;
      }
      .col-sm-9 {
        -ms-flex: 0 0 ; flex: 0 0 ; max-width: ;
      }
      .col-sm-10 {
        -ms-flex: 0 0 83.333333; flex: 0 0 83.333333; max-width: 83.333333;
      }
      .col-sm-11 {
        -ms-flex: 0 0 91.66666; flex: 0 0 91.66666; max-width: 91.66666;
      }
      .col-sm-12 {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .order-sm-first {
        -ms-flex-order: -1; order: -1;
      }
      .order-sm-last {
        -ms-flex-order: 13; order: 13;
      }
      .order-sm-0 {
        -ms-flex-order: 0; order: 0;
      }
      .order-sm-1 {
        -ms-flex-order: 1; order: 1;
      }
      .order-sm-2 {
        -ms-flex-order: 2; order: 2;
      }
      .order-sm-3 {
        -ms-flex-order: 3; order: 3;
      }
      .order-sm-4 {
        -ms-flex-order: 4; order: 4;
      }
      .order-sm- {
        -ms-flex-order: ; order: ;
      }
      .order-sm-6 {
        -ms-flex-order: 6; order: 6;
      }
      .order-sm- {
        -ms-flex-order: ; order: ;
      }
      .order-sm-8 {
        -ms-flex-order: 8; order: 8;
      }
      .order-sm-9 {
        -ms-flex-order: 9; order: 9;
      }
      .order-sm-10 {
        -ms-flex-order: 10; order: 10;
      }
      .order-sm-11 {
        -ms-flex-order: 11; order: 11;
      }
      .order-sm-12 {
        -ms-flex-order: 12; order: 12;
      }
      .offset-sm-0 {
        margin-left: 0;
      }
      .offset-sm-1 {
        margin-left: 8.333333;
      }
      .offset-sm-2 {
        margin-left: 16.66666;
      }
      .offset-sm-3 {
        margin-left: 2;
      }
      .offset-sm-4 {
        margin-left: 33.333333;
      }
      .offset-sm- {
        margin-left: 41.66666;
      }
      .offset-sm-6 {
        margin-left: 0;
      }
      .offset-sm- {
        margin-left: 8.333333;
      }
      .offset-sm-8 {
        margin-left: 66.66666;
      }
      .offset-sm-9 {
        margin-left: ;
      }
      .offset-sm-10 {
        margin-left: 83.333333;
      }
      .offset-sm-11 {
        margin-left: 91.66666;
      }
      .form-inline label {
        display: flex; -ms-flex-align: center; align-items: center; -ms-flex-pack: center; justify-content: center; margin-bottom: 0;
      }
      .form-inline .form-group {
        display: flex; -ms-flex: 0 0 auto; flex: 0 0 auto; -ms-flex-flow: row wrap; flex-flow: row wrap; -ms-flex-align: center; align-items: center; margin-bottom: 0;
      }
      .form-inline .form-control {
        display: inline-block; width: auto; vertical-align: middle;
      }
      .form-inline .form-control-plaintext {
        display: inline-block;
      }
      .form-inline .custom-select {
        width: auto;
      }
      .form-inline .input-group {
        width: auto;
      }
      .form-inline .form-check {
        display: flex; -ms-flex-align: center; align-items: center; -ms-flex-pack: center; justify-content: center; width: auto; padding-left: 0;
      }
      .form-inline .form-check-input {
        position: relative; -ms-flex-negative: 0; flex-shrink: 0; margin-top: 0; margin-right: .2rem; margin-left: 0;
      }
      .form-inline .custom-control {
        -ms-flex-align: center; align-items: center; -ms-flex-pack: center; justify-content: center;
      }
      .form-inline .custom-control-label {
        margin-bottom: 0;
      }
      .dropdown-menu-sm-left {
        right: auto; left: 0;
      }
      .dropdown-menu-sm-right {
        right: 0; left: auto;
      }
      .navbar-expand-sm {
        -ms-flex-flow: row nowrap; flex-flow: row nowrap; -ms-flex-pack: start; justify-content: flex-start;
      }
      .navbar-expand-sm .navbar-nav {
        -ms-flex-direction: row; flex-direction: row;
      }
      .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute;
      }
      .navbar-expand-sm .navbar-nav .nav-link {
        padding-right: .rem; padding-left: .rem;
      }
      .navbar-expand-sm>.container {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-sm>.container-fluid {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-sm>.container-lg {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-sm>.container-md {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-sm>.container-sm {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-sm>.container-xl {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-sm .navbar-collapse {
        display: flex !important; -ms-flex-preferred-size: auto; flex-basis: auto;
      }
      .navbar-expand-sm .navbar-toggler {
        display: none;
      }
      .card-deck {
        display: flex; -ms-flex-flow: row wrap; flex-flow: row wrap; margin-right: -1px; margin-left: -1px;
      }
      .card-deck .card {
        -ms-flex: 1 0 0; flex: 1 0 0; margin-right: 1px; margin-bottom: 0; margin-left: 1px;
      }
      .card-group {
        display: flex; -ms-flex-flow: row wrap; flex-flow: row wrap;
      }
      .card-group>.card {
        -ms-flex: 1 0 0; flex: 1 0 0; margin-bottom: 0;
      }
      .card-group>.card+.card {
        margin-left: 0; border-left: 0;
      }
      .card-group>.card:not(:last-child) {
        border-top-right-radius: 0; border-bottom-right-radius: 0;
      }
      .card-group>.card:not(:last-child) .card-header {
        border-top-right-radius: 0;
      }
      .card-group>.card:not(:last-child) .card-img-top {
        border-top-right-radius: 0;
      }
      .card-group>.card:not(:last-child) .card-footer {
        border-bottom-right-radius: 0;
      }
      .card-group>.card:not(:last-child) .card-img-bottom {
        border-bottom-right-radius: 0;
      }
      .card-group>.card:not(:first-child) {
        border-top-left-radius: 0; border-bottom-left-radius: 0;
      }
      .card-group>.card:not(:first-child) .card-header {
        border-top-left-radius: 0;
      }
      .card-group>.card:not(:first-child) .card-img-top {
        border-top-left-radius: 0;
      }
      .card-group>.card:not(:first-child) .card-footer {
        border-bottom-left-radius: 0;
      }
      .card-group>.card:not(:first-child) .card-img-bottom {
        border-bottom-left-radius: 0;
      }
      .card-columns {
        -webkit-column-count: 3; -moz-column-count: 3; column-count: 3; -webkit-column-gap: 1.2rem; -moz-column-gap: 1.2rem; column-gap: 1.2rem; orphans: 1; widows: 1;
      }
      .card-columns .card {
        display: inline-block; width: 100;
      }
      .jumbotron {
        padding: 4rem 2rem;
      }
      .list-group-horizontal-sm {
        -ms-flex-direction: row; flex-direction: row;
      }
      .list-group-horizontal-sm .list-group-item:first-child {
        border-bottom-left-radius: .2rem; border-top-right-radius: 0;
      }
      .list-group-horizontal-sm .list-group-item:last-child {
        border-top-right-radius: .2rem; border-bottom-left-radius: 0;
      }
      .list-group-horizontal-sm .list-group-item.active {
        margin-top: 0;
      }
      .list-group-horizontal-sm .list-group-item+.list-group-item {
        border-top-width: 1px; border-left-width: 0;
      }
      .list-group-horizontal-sm .list-group-item+.list-group-item.active {
        margin-left: -1px; border-left-width: 1px;
      }
      .modal-dialog {
        max-width: 00px; margin: 1.rem auto;
      }
      .modal-dialog-scrollable {
        max-height: calc(100 - 3.rem);
      }
      .modal-dialog-scrollable .modal-content {
        max-height: calc(100vh - 3.rem);
      }
      .modal-dialog-centered {
        min-height: calc(100 - 3.rem);
      }
      .modal-dialog-centered::before {
        height: calc(100vh - 3.rem);
      }
      .modal-sm {
        max-width: 300px;
      }
      .d-sm-none {
        display: none !important;
      }
      .d-sm-inline {
        display: inline !important;
      }
      .d-sm-inline-block {
        display: inline-block !important;
      }
      .d-sm-block {
        display: block !important;
      }
      .d-sm-table {
        display: table !important;
      }
      .d-sm-table-row {
        display: table-row !important;
      }
      .d-sm-table-cell {
        display: table-cell !important;
      }
      .d-sm-flex {
        display: flex !important;
      }
      .d-sm-inline-flex {
        display: inline-flex !important;
      }
      .flex-sm-row {
        -ms-flex-direction: row !important; flex-direction: row !important;
      }
      .flex-sm-column {
        -ms-flex-direction: column !important; flex-direction: column !important;
      }
      .flex-sm-row-reverse {
        -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important;
      }
      .flex-sm-column-reverse {
        -ms-flex-direction: column-reverse !important; flex-direction: column-reverse !important;
      }
      .flex-sm-wrap {
        -ms-flex-wrap: wrap !important; flex-wrap: wrap !important;
      }
      .flex-sm-nowrap {
        -ms-flex-wrap: nowrap !important; flex-wrap: nowrap !important;
      }
      .flex-sm-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important; flex-wrap: wrap-reverse !important;
      }
      .flex-sm-fill {
        -ms-flex: 1 1 auto !important; flex: 1 1 auto !important;
      }
      .flex-sm-grow-0 {
        -ms-flex-positive: 0 !important; flex-grow: 0 !important;
      }
      .flex-sm-grow-1 {
        -ms-flex-positive: 1 !important; flex-grow: 1 !important;
      }
      .flex-sm-shrink-0 {
        -ms-flex-negative: 0 !important; flex-shrink: 0 !important;
      }
      .flex-sm-shrink-1 {
        -ms-flex-negative: 1 !important; flex-shrink: 1 !important;
      }
      .justify-content-sm-start {
        -ms-flex-pack: start !important; justify-content: flex-start !important;
      }
      .justify-content-sm-end {
        -ms-flex-pack: end !important; justify-content: flex-end !important;
      }
      .justify-content-sm-center {
        -ms-flex-pack: center !important; justify-content: center !important;
      }
      .justify-content-sm-between {
        -ms-flex-pack: justify !important; justify-content: space-between !important;
      }
      .justify-content-sm-around {
        -ms-flex-pack: distribute !important; justify-content: space-around !important;
      }
      .align-items-sm-start {
        -ms-flex-align: start !important; align-items: flex-start !important;
      }
      .align-items-sm-end {
        -ms-flex-align: end !important; align-items: flex-end !important;
      }
      .align-items-sm-center {
        -ms-flex-align: center !important; align-items: center !important;
      }
      .align-items-sm-baseline {
        -ms-flex-align: baseline !important; align-items: baseline !important;
      }
      .align-items-sm-stretch {
        -ms-flex-align: stretch !important; align-items: stretch !important;
      }
      .align-content-sm-start {
        -ms-flex-line-pack: start !important; align-content: flex-start !important;
      }
      .align-content-sm-end {
        -ms-flex-line-pack: end !important; align-content: flex-end !important;
      }
      .align-content-sm-center {
        -ms-flex-line-pack: center !important; align-content: center !important;
      }
      .align-content-sm-between {
        -ms-flex-line-pack: justify !important; align-content: space-between !important;
      }
      .align-content-sm-around {
        -ms-flex-line-pack: distribute !important; align-content: space-around !important;
      }
      .align-content-sm-stretch {
        -ms-flex-line-pack: stretch !important; align-content: stretch !important;
      }
      .align-self-sm-auto {
        -ms-flex-item-align: auto !important; align-self: auto !important;
      }
      .align-self-sm-start {
        -ms-flex-item-align: start !important; align-self: flex-start !important;
      }
      .align-self-sm-end {
        -ms-flex-item-align: end !important; align-self: flex-end !important;
      }
      .align-self-sm-center {
        -ms-flex-item-align: center !important; align-self: center !important;
      }
      .align-self-sm-baseline {
        -ms-flex-item-align: baseline !important; align-self: baseline !important;
      }
      .align-self-sm-stretch {
        -ms-flex-item-align: stretch !important; align-self: stretch !important;
      }
      .float-sm-left {
        float: left !important;
      }
      .float-sm-right {
        float: right !important;
      }
      .float-sm-none {
        float: none !important;
      }
      .m-sm-0 {
        margin: 0 !important;
      }
      .mt-sm-0 {
        margin-top: 0 !important;
      }
      .my-sm-0 {
        margin-top: 0 !important;
      }
      .mr-sm-0 {
        margin-right: 0 !important;
      }
      .mx-sm-0 {
        margin-right: 0 !important;
      }
      .mb-sm-0 {
        margin-bottom: 0 !important;
      }
      .my-sm-0 {
        margin-bottom: 0 !important;
      }
      .ml-sm-0 {
        margin-left: 0 !important;
      }
      .mx-sm-0 {
        margin-left: 0 !important;
      }
      .m-sm-1 {
        margin: .2rem !important;
      }
      .mt-sm-1 {
        margin-top: .2rem !important;
      }
      .my-sm-1 {
        margin-top: .2rem !important;
      }
      .mr-sm-1 {
        margin-right: .2rem !important;
      }
      .mx-sm-1 {
        margin-right: .2rem !important;
      }
      .mb-sm-1 {
        margin-bottom: .2rem !important;
      }
      .my-sm-1 {
        margin-bottom: .2rem !important;
      }
      .ml-sm-1 {
        margin-left: .2rem !important;
      }
      .mx-sm-1 {
        margin-left: .2rem !important;
      }
      .m-sm-2 {
        margin: .rem !important;
      }
      .mt-sm-2 {
        margin-top: .rem !important;
      }
      .my-sm-2 {
        margin-top: .rem !important;
      }
      .mr-sm-2 {
        margin-right: .rem !important;
      }
      .mx-sm-2 {
        margin-right: .rem !important;
      }
      .mb-sm-2 {
        margin-bottom: .rem !important;
      }
      .my-sm-2 {
        margin-bottom: .rem !important;
      }
      .ml-sm-2 {
        margin-left: .rem !important;
      }
      .mx-sm-2 {
        margin-left: .rem !important;
      }
      .m-sm-3 {
        margin: 1rem !important;
      }
      .mt-sm-3 {
        margin-top: 1rem !important;
      }
      .my-sm-3 {
        margin-top: 1rem !important;
      }
      .mr-sm-3 {
        margin-right: 1rem !important;
      }
      .mx-sm-3 {
        margin-right: 1rem !important;
      }
      .mb-sm-3 {
        margin-bottom: 1rem !important;
      }
      .my-sm-3 {
        margin-bottom: 1rem !important;
      }
      .ml-sm-3 {
        margin-left: 1rem !important;
      }
      .mx-sm-3 {
        margin-left: 1rem !important;
      }
      .m-sm-4 {
        margin: 1.rem !important;
      }
      .mt-sm-4 {
        margin-top: 1.rem !important;
      }
      .my-sm-4 {
        margin-top: 1.rem !important;
      }
      .mr-sm-4 {
        margin-right: 1.rem !important;
      }
      .mx-sm-4 {
        margin-right: 1.rem !important;
      }
      .mb-sm-4 {
        margin-bottom: 1.rem !important;
      }
      .my-sm-4 {
        margin-bottom: 1.rem !important;
      }
      .ml-sm-4 {
        margin-left: 1.rem !important;
      }
      .mx-sm-4 {
        margin-left: 1.rem !important;
      }
      .m-sm- {
        margin: 3rem !important;
      }
      .mt-sm- {
        margin-top: 3rem !important;
      }
      .my-sm- {
        margin-top: 3rem !important;
      }
      .mr-sm- {
        margin-right: 3rem !important;
      }
      .mx-sm- {
        margin-right: 3rem !important;
      }
      .mb-sm- {
        margin-bottom: 3rem !important;
      }
      .my-sm- {
        margin-bottom: 3rem !important;
      }
      .ml-sm- {
        margin-left: 3rem !important;
      }
      .mx-sm- {
        margin-left: 3rem !important;
      }
      .p-sm-0 {
        padding: 0 !important;
      }
      .pt-sm-0 {
        padding-top: 0 !important;
      }
      .py-sm-0 {
        padding-top: 0 !important;
      }
      .pr-sm-0 {
        padding-right: 0 !important;
      }
      .px-sm-0 {
        padding-right: 0 !important;
      }
      .pb-sm-0 {
        padding-bottom: 0 !important;
      }
      .py-sm-0 {
        padding-bottom: 0 !important;
      }
      .pl-sm-0 {
        padding-left: 0 !important;
      }
      .px-sm-0 {
        padding-left: 0 !important;
      }
      .p-sm-1 {
        padding: .2rem !important;
      }
      .pt-sm-1 {
        padding-top: .2rem !important;
      }
      .py-sm-1 {
        padding-top: .2rem !important;
      }
      .pr-sm-1 {
        padding-right: .2rem !important;
      }
      .px-sm-1 {
        padding-right: .2rem !important;
      }
      .pb-sm-1 {
        padding-bottom: .2rem !important;
      }
      .py-sm-1 {
        padding-bottom: .2rem !important;
      }
      .pl-sm-1 {
        padding-left: .2rem !important;
      }
      .px-sm-1 {
        padding-left: .2rem !important;
      }
      .p-sm-2 {
        padding: .rem !important;
      }
      .pt-sm-2 {
        padding-top: .rem !important;
      }
      .py-sm-2 {
        padding-top: .rem !important;
      }
      .pr-sm-2 {
        padding-right: .rem !important;
      }
      .px-sm-2 {
        padding-right: .rem !important;
      }
      .pb-sm-2 {
        padding-bottom: .rem !important;
      }
      .py-sm-2 {
        padding-bottom: .rem !important;
      }
      .pl-sm-2 {
        padding-left: .rem !important;
      }
      .px-sm-2 {
        padding-left: .rem !important;
      }
      .p-sm-3 {
        padding: 1rem !important;
      }
      .pt-sm-3 {
        padding-top: 1rem !important;
      }
      .py-sm-3 {
        padding-top: 1rem !important;
      }
      .pr-sm-3 {
        padding-right: 1rem !important;
      }
      .px-sm-3 {
        padding-right: 1rem !important;
      }
      .pb-sm-3 {
        padding-bottom: 1rem !important;
      }
      .py-sm-3 {
        padding-bottom: 1rem !important;
      }
      .pl-sm-3 {
        padding-left: 1rem !important;
      }
      .px-sm-3 {
        padding-left: 1rem !important;
      }
      .p-sm-4 {
        padding: 1.rem !important;
      }
      .pt-sm-4 {
        padding-top: 1.rem !important;
      }
      .py-sm-4 {
        padding-top: 1.rem !important;
      }
      .pr-sm-4 {
        padding-right: 1.rem !important;
      }
      .px-sm-4 {
        padding-right: 1.rem !important;
      }
      .pb-sm-4 {
        padding-bottom: 1.rem !important;
      }
      .py-sm-4 {
        padding-bottom: 1.rem !important;
      }
      .pl-sm-4 {
        padding-left: 1.rem !important;
      }
      .px-sm-4 {
        padding-left: 1.rem !important;
      }
      .p-sm- {
        padding: 3rem !important;
      }
      .pt-sm- {
        padding-top: 3rem !important;
      }
      .py-sm- {
        padding-top: 3rem !important;
      }
      .pr-sm- {
        padding-right: 3rem !important;
      }
      .px-sm- {
        padding-right: 3rem !important;
      }
      .pb-sm- {
        padding-bottom: 3rem !important;
      }
      .py-sm- {
        padding-bottom: 3rem !important;
      }
      .pl-sm- {
        padding-left: 3rem !important;
      }
      .px-sm- {
        padding-left: 3rem !important;
      }
      .m-sm-n1 {
        margin: -.2rem !important;
      }
      .mt-sm-n1 {
        margin-top: -.2rem !important;
      }
      .my-sm-n1 {
        margin-top: -.2rem !important;
      }
      .mr-sm-n1 {
        margin-right: -.2rem !important;
      }
      .mx-sm-n1 {
        margin-right: -.2rem !important;
      }
      .mb-sm-n1 {
        margin-bottom: -.2rem !important;
      }
      .my-sm-n1 {
        margin-bottom: -.2rem !important;
      }
      .ml-sm-n1 {
        margin-left: -.2rem !important;
      }
      .mx-sm-n1 {
        margin-left: -.2rem !important;
      }
      .m-sm-n2 {
        margin: -.rem !important;
      }
      .mt-sm-n2 {
        margin-top: -.rem !important;
      }
      .my-sm-n2 {
        margin-top: -.rem !important;
      }
      .mr-sm-n2 {
        margin-right: -.rem !important;
      }
      .mx-sm-n2 {
        margin-right: -.rem !important;
      }
      .mb-sm-n2 {
        margin-bottom: -.rem !important;
      }
      .my-sm-n2 {
        margin-bottom: -.rem !important;
      }
      .ml-sm-n2 {
        margin-left: -.rem !important;
      }
      .mx-sm-n2 {
        margin-left: -.rem !important;
      }
      .m-sm-n3 {
        margin: -1rem !important;
      }
      .mt-sm-n3 {
        margin-top: -1rem !important;
      }
      .my-sm-n3 {
        margin-top: -1rem !important;
      }
      .mr-sm-n3 {
        margin-right: -1rem !important;
      }
      .mx-sm-n3 {
        margin-right: -1rem !important;
      }
      .mb-sm-n3 {
        margin-bottom: -1rem !important;
      }
      .my-sm-n3 {
        margin-bottom: -1rem !important;
      }
      .ml-sm-n3 {
        margin-left: -1rem !important;
      }
      .mx-sm-n3 {
        margin-left: -1rem !important;
      }
      .m-sm-n4 {
        margin: -1.rem !important;
      }
      .mt-sm-n4 {
        margin-top: -1.rem !important;
      }
      .my-sm-n4 {
        margin-top: -1.rem !important;
      }
      .mr-sm-n4 {
        margin-right: -1.rem !important;
      }
      .mx-sm-n4 {
        margin-right: -1.rem !important;
      }
      .mb-sm-n4 {
        margin-bottom: -1.rem !important;
      }
      .my-sm-n4 {
        margin-bottom: -1.rem !important;
      }
      .ml-sm-n4 {
        margin-left: -1.rem !important;
      }
      .mx-sm-n4 {
        margin-left: -1.rem !important;
      }
      .m-sm-n {
        margin: -3rem !important;
      }
      .mt-sm-n {
        margin-top: -3rem !important;
      }
      .my-sm-n {
        margin-top: -3rem !important;
      }
      .mr-sm-n {
        margin-right: -3rem !important;
      }
      .mx-sm-n {
        margin-right: -3rem !important;
      }
      .mb-sm-n {
        margin-bottom: -3rem !important;
      }
      .my-sm-n {
        margin-bottom: -3rem !important;
      }
      .ml-sm-n {
        margin-left: -3rem !important;
      }
      .mx-sm-n {
        margin-left: -3rem !important;
      }
      .m-sm-auto {
        margin: auto !important;
      }
      .mt-sm-auto {
        margin-top: auto !important;
      }
      .my-sm-auto {
        margin-top: auto !important;
      }
      .mr-sm-auto {
        margin-right: auto !important;
      }
      .mx-sm-auto {
        margin-right: auto !important;
      }
      .mb-sm-auto {
        margin-bottom: auto !important;
      }
      .my-sm-auto {
        margin-bottom: auto !important;
      }
      .ml-sm-auto {
        margin-left: auto !important;
      }
      .mx-sm-auto {
        margin-left: auto !important;
      }
      .text-sm-left {
        text-align: left !important;
      }
      .text-sm-right {
        text-align: right !important;
      }
      .text-sm-center {
        text-align: center !important;
      }
    }
    @media (min-width:68px) {
      .container {
        max-width: 20px;
      }
      .container {
        max-width: 20px;
      }
      .container-md {
        max-width: 20px;
      }
      .container-sm {
        max-width: 20px;
      }
      .col-md {
        -ms-flex-preferred-size: 0; flex-basis: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100;
      }
      .row-cols-md-1>* {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .row-cols-md-2>* {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .row-cols-md-3>* {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .row-cols-md-4>* {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .row-cols-md->* {
        -ms-flex: 0 0 20; flex: 0 0 20; max-width: 20;
      }
      .row-cols-md-6>* {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-md-auto {
        -ms-flex: 0 0 auto; flex: 0 0 auto; width: auto; max-width: 100;
      }
      .col-md-1 {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-md-2 {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-md-3 {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .col-md-4 {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .col-md- {
        -ms-flex: 0 0 41.66666; flex: 0 0 41.66666; max-width: 41.66666;
      }
      .col-md-6 {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .col-md- {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-md-8 {
        -ms-flex: 0 0 66.66666; flex: 0 0 66.66666; max-width: 66.66666;
      }
      .col-md-9 {
        -ms-flex: 0 0 ; flex: 0 0 ; max-width: ;
      }
      .col-md-10 {
        -ms-flex: 0 0 83.333333; flex: 0 0 83.333333; max-width: 83.333333;
      }
      .col-md-11 {
        -ms-flex: 0 0 91.66666; flex: 0 0 91.66666; max-width: 91.66666;
      }
      .col-md-12 {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .order-md-first {
        -ms-flex-order: -1; order: -1;
      }
      .order-md-last {
        -ms-flex-order: 13; order: 13;
      }
      .order-md-0 {
        -ms-flex-order: 0; order: 0;
      }
      .order-md-1 {
        -ms-flex-order: 1; order: 1;
      }
      .order-md-2 {
        -ms-flex-order: 2; order: 2;
      }
      .order-md-3 {
        -ms-flex-order: 3; order: 3;
      }
      .order-md-4 {
        -ms-flex-order: 4; order: 4;
      }
      .order-md- {
        -ms-flex-order: ; order: ;
      }
      .order-md-6 {
        -ms-flex-order: 6; order: 6;
      }
      .order-md- {
        -ms-flex-order: ; order: ;
      }
      .order-md-8 {
        -ms-flex-order: 8; order: 8;
      }
      .order-md-9 {
        -ms-flex-order: 9; order: 9;
      }
      .order-md-10 {
        -ms-flex-order: 10; order: 10;
      }
      .order-md-11 {
        -ms-flex-order: 11; order: 11;
      }
      .order-md-12 {
        -ms-flex-order: 12; order: 12;
      }
      .offset-md-0 {
        margin-left: 0;
      }
      .offset-md-1 {
        margin-left: 8.333333;
      }
      .offset-md-2 {
        margin-left: 16.66666;
      }
      .offset-md-3 {
        margin-left: 2;
      }
      .offset-md-4 {
        margin-left: 33.333333;
      }
      .offset-md- {
        margin-left: 41.66666;
      }
      .offset-md-6 {
        margin-left: 0;
      }
      .offset-md- {
        margin-left: 8.333333;
      }
      .offset-md-8 {
        margin-left: 66.66666;
      }
      .offset-md-9 {
        margin-left: ;
      }
      .offset-md-10 {
        margin-left: 83.333333;
      }
      .offset-md-11 {
        margin-left: 91.66666;
      }
      .dropdown-menu-md-left {
        right: auto; left: 0;
      }
      .dropdown-menu-md-right {
        right: 0; left: auto;
      }
      .navbar-expand-md {
        -ms-flex-flow: row nowrap; flex-flow: row nowrap; -ms-flex-pack: start; justify-content: flex-start;
      }
      .navbar-expand-md .navbar-nav {
        -ms-flex-direction: row; flex-direction: row;
      }
      .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute;
      }
      .navbar-expand-md .navbar-nav .nav-link {
        padding-right: .rem; padding-left: .rem;
      }
      .navbar-expand-md>.container {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-md>.container-fluid {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-md>.container-lg {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-md>.container-md {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-md>.container-sm {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-md>.container-xl {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-md .navbar-collapse {
        display: flex !important; -ms-flex-preferred-size: auto; flex-basis: auto;
      }
      .navbar-expand-md .navbar-toggler {
        display: none;
      }
      .list-group-horizontal-md {
        -ms-flex-direction: row; flex-direction: row;
      }
      .list-group-horizontal-md .list-group-item:first-child {
        border-bottom-left-radius: .2rem; border-top-right-radius: 0;
      }
      .list-group-horizontal-md .list-group-item:last-child {
        border-top-right-radius: .2rem; border-bottom-left-radius: 0;
      }
      .list-group-horizontal-md .list-group-item.active {
        margin-top: 0;
      }
      .list-group-horizontal-md .list-group-item+.list-group-item {
        border-top-width: 1px; border-left-width: 0;
      }
      .list-group-horizontal-md .list-group-item+.list-group-item.active {
        margin-left: -1px; border-left-width: 1px;
      }
      .d-md-none {
        display: none !important;
      }
      .d-md-inline {
        display: inline !important;
      }
      .d-md-inline-block {
        display: inline-block !important;
      }
      .d-md-block {
        display: block !important;
      }
      .d-md-table {
        display: table !important;
      }
      .d-md-table-row {
        display: table-row !important;
      }
      .d-md-table-cell {
        display: table-cell !important;
      }
      .d-md-flex {
        display: flex !important;
      }
      .d-md-inline-flex {
        display: inline-flex !important;
      }
      .flex-md-row {
        -ms-flex-direction: row !important; flex-direction: row !important;
      }
      .flex-md-column {
        -ms-flex-direction: column !important; flex-direction: column !important;
      }
      .flex-md-row-reverse {
        -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important;
      }
      .flex-md-column-reverse {
        -ms-flex-direction: column-reverse !important; flex-direction: column-reverse !important;
      }
      .flex-md-wrap {
        -ms-flex-wrap: wrap !important; flex-wrap: wrap !important;
      }
      .flex-md-nowrap {
        -ms-flex-wrap: nowrap !important; flex-wrap: nowrap !important;
      }
      .flex-md-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important; flex-wrap: wrap-reverse !important;
      }
      .flex-md-fill {
        -ms-flex: 1 1 auto !important; flex: 1 1 auto !important;
      }
      .flex-md-grow-0 {
        -ms-flex-positive: 0 !important; flex-grow: 0 !important;
      }
      .flex-md-grow-1 {
        -ms-flex-positive: 1 !important; flex-grow: 1 !important;
      }
      .flex-md-shrink-0 {
        -ms-flex-negative: 0 !important; flex-shrink: 0 !important;
      }
      .flex-md-shrink-1 {
        -ms-flex-negative: 1 !important; flex-shrink: 1 !important;
      }
      .justify-content-md-start {
        -ms-flex-pack: start !important; justify-content: flex-start !important;
      }
      .justify-content-md-end {
        -ms-flex-pack: end !important; justify-content: flex-end !important;
      }
      .justify-content-md-center {
        -ms-flex-pack: center !important; justify-content: center !important;
      }
      .justify-content-md-between {
        -ms-flex-pack: justify !important; justify-content: space-between !important;
      }
      .justify-content-md-around {
        -ms-flex-pack: distribute !important; justify-content: space-around !important;
      }
      .align-items-md-start {
        -ms-flex-align: start !important; align-items: flex-start !important;
      }
      .align-items-md-end {
        -ms-flex-align: end !important; align-items: flex-end !important;
      }
      .align-items-md-center {
        -ms-flex-align: center !important; align-items: center !important;
      }
      .align-items-md-baseline {
        -ms-flex-align: baseline !important; align-items: baseline !important;
      }
      .align-items-md-stretch {
        -ms-flex-align: stretch !important; align-items: stretch !important;
      }
      .align-content-md-start {
        -ms-flex-line-pack: start !important; align-content: flex-start !important;
      }
      .align-content-md-end {
        -ms-flex-line-pack: end !important; align-content: flex-end !important;
      }
      .align-content-md-center {
        -ms-flex-line-pack: center !important; align-content: center !important;
      }
      .align-content-md-between {
        -ms-flex-line-pack: justify !important; align-content: space-between !important;
      }
      .align-content-md-around {
        -ms-flex-line-pack: distribute !important; align-content: space-around !important;
      }
      .align-content-md-stretch {
        -ms-flex-line-pack: stretch !important; align-content: stretch !important;
      }
      .align-self-md-auto {
        -ms-flex-item-align: auto !important; align-self: auto !important;
      }
      .align-self-md-start {
        -ms-flex-item-align: start !important; align-self: flex-start !important;
      }
      .align-self-md-end {
        -ms-flex-item-align: end !important; align-self: flex-end !important;
      }
      .align-self-md-center {
        -ms-flex-item-align: center !important; align-self: center !important;
      }
      .align-self-md-baseline {
        -ms-flex-item-align: baseline !important; align-self: baseline !important;
      }
      .align-self-md-stretch {
        -ms-flex-item-align: stretch !important; align-self: stretch !important;
      }
      .float-md-left {
        float: left !important;
      }
      .float-md-right {
        float: right !important;
      }
      .float-md-none {
        float: none !important;
      }
      .m-md-0 {
        margin: 0 !important;
      }
      .mt-md-0 {
        margin-top: 0 !important;
      }
      .my-md-0 {
        margin-top: 0 !important;
      }
      .mr-md-0 {
        margin-right: 0 !important;
      }
      .mx-md-0 {
        margin-right: 0 !important;
      }
      .mb-md-0 {
        margin-bottom: 0 !important;
      }
      .my-md-0 {
        margin-bottom: 0 !important;
      }
      .ml-md-0 {
        margin-left: 0 !important;
      }
      .mx-md-0 {
        margin-left: 0 !important;
      }
      .m-md-1 {
        margin: .2rem !important;
      }
      .mt-md-1 {
        margin-top: .2rem !important;
      }
      .my-md-1 {
        margin-top: .2rem !important;
      }
      .mr-md-1 {
        margin-right: .2rem !important;
      }
      .mx-md-1 {
        margin-right: .2rem !important;
      }
      .mb-md-1 {
        margin-bottom: .2rem !important;
      }
      .my-md-1 {
        margin-bottom: .2rem !important;
      }
      .ml-md-1 {
        margin-left: .2rem !important;
      }
      .mx-md-1 {
        margin-left: .2rem !important;
      }
      .m-md-2 {
        margin: .rem !important;
      }
      .mt-md-2 {
        margin-top: .rem !important;
      }
      .my-md-2 {
        margin-top: .rem !important;
      }
      .mr-md-2 {
        margin-right: .rem !important;
      }
      .mx-md-2 {
        margin-right: .rem !important;
      }
      .mb-md-2 {
        margin-bottom: .rem !important;
      }
      .my-md-2 {
        margin-bottom: .rem !important;
      }
      .ml-md-2 {
        margin-left: .rem !important;
      }
      .mx-md-2 {
        margin-left: .rem !important;
      }
      .m-md-3 {
        margin: 1rem !important;
      }
      .mt-md-3 {
        margin-top: 1rem !important;
      }
      .my-md-3 {
        margin-top: 1rem !important;
      }
      .mr-md-3 {
        margin-right: 1rem !important;
      }
      .mx-md-3 {
        margin-right: 1rem !important;
      }
      .mb-md-3 {
        margin-bottom: 1rem !important;
      }
      .my-md-3 {
        margin-bottom: 1rem !important;
      }
      .ml-md-3 {
        margin-left: 1rem !important;
      }
      .mx-md-3 {
        margin-left: 1rem !important;
      }
      .m-md-4 {
        margin: 1.rem !important;
      }
      .mt-md-4 {
        margin-top: 1.rem !important;
      }
      .my-md-4 {
        margin-top: 1.rem !important;
      }
      .mr-md-4 {
        margin-right: 1.rem !important;
      }
      .mx-md-4 {
        margin-right: 1.rem !important;
      }
      .mb-md-4 {
        margin-bottom: 1.rem !important;
      }
      .my-md-4 {
        margin-bottom: 1.rem !important;
      }
      .ml-md-4 {
        margin-left: 1.rem !important;
      }
      .mx-md-4 {
        margin-left: 1.rem !important;
      }
      .m-md- {
        margin: 3rem !important;
      }
      .mt-md- {
        margin-top: 3rem !important;
      }
      .my-md- {
        margin-top: 3rem !important;
      }
      .mr-md- {
        margin-right: 3rem !important;
      }
      .mx-md- {
        margin-right: 3rem !important;
      }
      .mb-md- {
        margin-bottom: 3rem !important;
      }
      .my-md- {
        margin-bottom: 3rem !important;
      }
      .ml-md- {
        margin-left: 3rem !important;
      }
      .mx-md- {
        margin-left: 3rem !important;
      }
      .p-md-0 {
        padding: 0 !important;
      }
      .pt-md-0 {
        padding-top: 0 !important;
      }
      .py-md-0 {
        padding-top: 0 !important;
      }
      .pr-md-0 {
        padding-right: 0 !important;
      }
      .px-md-0 {
        padding-right: 0 !important;
      }
      .pb-md-0 {
        padding-bottom: 0 !important;
      }
      .py-md-0 {
        padding-bottom: 0 !important;
      }
      .pl-md-0 {
        padding-left: 0 !important;
      }
      .px-md-0 {
        padding-left: 0 !important;
      }
      .p-md-1 {
        padding: .2rem !important;
      }
      .pt-md-1 {
        padding-top: .2rem !important;
      }
      .py-md-1 {
        padding-top: .2rem !important;
      }
      .pr-md-1 {
        padding-right: .2rem !important;
      }
      .px-md-1 {
        padding-right: .2rem !important;
      }
      .pb-md-1 {
        padding-bottom: .2rem !important;
      }
      .py-md-1 {
        padding-bottom: .2rem !important;
      }
      .pl-md-1 {
        padding-left: .2rem !important;
      }
      .px-md-1 {
        padding-left: .2rem !important;
      }
      .p-md-2 {
        padding: .rem !important;
      }
      .pt-md-2 {
        padding-top: .rem !important;
      }
      .py-md-2 {
        padding-top: .rem !important;
      }
      .pr-md-2 {
        padding-right: .rem !important;
      }
      .px-md-2 {
        padding-right: .rem !important;
      }
      .pb-md-2 {
        padding-bottom: .rem !important;
      }
      .py-md-2 {
        padding-bottom: .rem !important;
      }
      .pl-md-2 {
        padding-left: .rem !important;
      }
      .px-md-2 {
        padding-left: .rem !important;
      }
      .p-md-3 {
        padding: 1rem !important;
      }
      .pt-md-3 {
        padding-top: 1rem !important;
      }
      .py-md-3 {
        padding-top: 1rem !important;
      }
      .pr-md-3 {
        padding-right: 1rem !important;
      }
      .px-md-3 {
        padding-right: 1rem !important;
      }
      .pb-md-3 {
        padding-bottom: 1rem !important;
      }
      .py-md-3 {
        padding-bottom: 1rem !important;
      }
      .pl-md-3 {
        padding-left: 1rem !important;
      }
      .px-md-3 {
        padding-left: 1rem !important;
      }
      .p-md-4 {
        padding: 1.rem !important;
      }
      .pt-md-4 {
        padding-top: 1.rem !important;
      }
      .py-md-4 {
        padding-top: 1.rem !important;
      }
      .pr-md-4 {
        padding-right: 1.rem !important;
      }
      .px-md-4 {
        padding-right: 1.rem !important;
      }
      .pb-md-4 {
        padding-bottom: 1.rem !important;
      }
      .py-md-4 {
        padding-bottom: 1.rem !important;
      }
      .pl-md-4 {
        padding-left: 1.rem !important;
      }
      .px-md-4 {
        padding-left: 1.rem !important;
      }
      .p-md- {
        padding: 3rem !important;
      }
      .pt-md- {
        padding-top: 3rem !important;
      }
      .py-md- {
        padding-top: 3rem !important;
      }
      .pr-md- {
        padding-right: 3rem !important;
      }
      .px-md- {
        padding-right: 3rem !important;
      }
      .pb-md- {
        padding-bottom: 3rem !important;
      }
      .py-md- {
        padding-bottom: 3rem !important;
      }
      .pl-md- {
        padding-left: 3rem !important;
      }
      .px-md- {
        padding-left: 3rem !important;
      }
      .m-md-n1 {
        margin: -.2rem !important;
      }
      .mt-md-n1 {
        margin-top: -.2rem !important;
      }
      .my-md-n1 {
        margin-top: -.2rem !important;
      }
      .mr-md-n1 {
        margin-right: -.2rem !important;
      }
      .mx-md-n1 {
        margin-right: -.2rem !important;
      }
      .mb-md-n1 {
        margin-bottom: -.2rem !important;
      }
      .my-md-n1 {
        margin-bottom: -.2rem !important;
      }
      .ml-md-n1 {
        margin-left: -.2rem !important;
      }
      .mx-md-n1 {
        margin-left: -.2rem !important;
      }
      .m-md-n2 {
        margin: -.rem !important;
      }
      .mt-md-n2 {
        margin-top: -.rem !important;
      }
      .my-md-n2 {
        margin-top: -.rem !important;
      }
      .mr-md-n2 {
        margin-right: -.rem !important;
      }
      .mx-md-n2 {
        margin-right: -.rem !important;
      }
      .mb-md-n2 {
        margin-bottom: -.rem !important;
      }
      .my-md-n2 {
        margin-bottom: -.rem !important;
      }
      .ml-md-n2 {
        margin-left: -.rem !important;
      }
      .mx-md-n2 {
        margin-left: -.rem !important;
      }
      .m-md-n3 {
        margin: -1rem !important;
      }
      .mt-md-n3 {
        margin-top: -1rem !important;
      }
      .my-md-n3 {
        margin-top: -1rem !important;
      }
      .mr-md-n3 {
        margin-right: -1rem !important;
      }
      .mx-md-n3 {
        margin-right: -1rem !important;
      }
      .mb-md-n3 {
        margin-bottom: -1rem !important;
      }
      .my-md-n3 {
        margin-bottom: -1rem !important;
      }
      .ml-md-n3 {
        margin-left: -1rem !important;
      }
      .mx-md-n3 {
        margin-left: -1rem !important;
      }
      .m-md-n4 {
        margin: -1.rem !important;
      }
      .mt-md-n4 {
        margin-top: -1.rem !important;
      }
      .my-md-n4 {
        margin-top: -1.rem !important;
      }
      .mr-md-n4 {
        margin-right: -1.rem !important;
      }
      .mx-md-n4 {
        margin-right: -1.rem !important;
      }
      .mb-md-n4 {
        margin-bottom: -1.rem !important;
      }
      .my-md-n4 {
        margin-bottom: -1.rem !important;
      }
      .ml-md-n4 {
        margin-left: -1.rem !important;
      }
      .mx-md-n4 {
        margin-left: -1.rem !important;
      }
      .m-md-n {
        margin: -3rem !important;
      }
      .mt-md-n {
        margin-top: -3rem !important;
      }
      .my-md-n {
        margin-top: -3rem !important;
      }
      .mr-md-n {
        margin-right: -3rem !important;
      }
      .mx-md-n {
        margin-right: -3rem !important;
      }
      .mb-md-n {
        margin-bottom: -3rem !important;
      }
      .my-md-n {
        margin-bottom: -3rem !important;
      }
      .ml-md-n {
        margin-left: -3rem !important;
      }
      .mx-md-n {
        margin-left: -3rem !important;
      }
      .m-md-auto {
        margin: auto !important;
      }
      .mt-md-auto {
        margin-top: auto !important;
      }
      .my-md-auto {
        margin-top: auto !important;
      }
      .mr-md-auto {
        margin-right: auto !important;
      }
      .mx-md-auto {
        margin-right: auto !important;
      }
      .mb-md-auto {
        margin-bottom: auto !important;
      }
      .my-md-auto {
        margin-bottom: auto !important;
      }
      .ml-md-auto {
        margin-left: auto !important;
      }
      .mx-md-auto {
        margin-left: auto !important;
      }
      .text-md-left {
        text-align: left !important;
      }
      .text-md-right {
        text-align: right !important;
      }
      .text-md-center {
        text-align: center !important;
      }
    }
    @media (min-width:992px) {
      .container {
        max-width: 960px;
      }
      .container {
        max-width: 960px;
      }
      .container-lg {
        max-width: 960px;
      }
      .container-md {
        max-width: 960px;
      }
      .container-sm {
        max-width: 960px;
      }
      .col-lg {
        -ms-flex-preferred-size: 0; flex-basis: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100;
      }
      .row-cols-lg-1>* {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .row-cols-lg-2>* {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .row-cols-lg-3>* {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .row-cols-lg-4>* {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .row-cols-lg->* {
        -ms-flex: 0 0 20; flex: 0 0 20; max-width: 20;
      }
      .row-cols-lg-6>* {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-lg-auto {
        -ms-flex: 0 0 auto; flex: 0 0 auto; width: auto; max-width: 100;
      }
      .col-lg-1 {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-lg-2 {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-lg-3 {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .col-lg-4 {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .col-lg- {
        -ms-flex: 0 0 41.66666; flex: 0 0 41.66666; max-width: 41.66666;
      }
      .col-lg-6 {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .col-lg- {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-lg-8 {
        -ms-flex: 0 0 66.66666; flex: 0 0 66.66666; max-width: 66.66666;
      }
      .col-lg-9 {
        -ms-flex: 0 0 ; flex: 0 0 ; max-width: ;
      }
      .col-lg-10 {
        -ms-flex: 0 0 83.333333; flex: 0 0 83.333333; max-width: 83.333333;
      }
      .col-lg-11 {
        -ms-flex: 0 0 91.66666; flex: 0 0 91.66666; max-width: 91.66666;
      }
      .col-lg-12 {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .order-lg-first {
        -ms-flex-order: -1; order: -1;
      }
      .order-lg-last {
        -ms-flex-order: 13; order: 13;
      }
      .order-lg-0 {
        -ms-flex-order: 0; order: 0;
      }
      .order-lg-1 {
        -ms-flex-order: 1; order: 1;
      }
      .order-lg-2 {
        -ms-flex-order: 2; order: 2;
      }
      .order-lg-3 {
        -ms-flex-order: 3; order: 3;
      }
      .order-lg-4 {
        -ms-flex-order: 4; order: 4;
      }
      .order-lg- {
        -ms-flex-order: ; order: ;
      }
      .order-lg-6 {
        -ms-flex-order: 6; order: 6;
      }
      .order-lg- {
        -ms-flex-order: ; order: ;
      }
      .order-lg-8 {
        -ms-flex-order: 8; order: 8;
      }
      .order-lg-9 {
        -ms-flex-order: 9; order: 9;
      }
      .order-lg-10 {
        -ms-flex-order: 10; order: 10;
      }
      .order-lg-11 {
        -ms-flex-order: 11; order: 11;
      }
      .order-lg-12 {
        -ms-flex-order: 12; order: 12;
      }
      .offset-lg-0 {
        margin-left: 0;
      }
      .offset-lg-1 {
        margin-left: 8.333333;
      }
      .offset-lg-2 {
        margin-left: 16.66666;
      }
      .offset-lg-3 {
        margin-left: 2;
      }
      .offset-lg-4 {
        margin-left: 33.333333;
      }
      .offset-lg- {
        margin-left: 41.66666;
      }
      .offset-lg-6 {
        margin-left: 0;
      }
      .offset-lg- {
        margin-left: 8.333333;
      }
      .offset-lg-8 {
        margin-left: 66.66666;
      }
      .offset-lg-9 {
        margin-left: ;
      }
      .offset-lg-10 {
        margin-left: 83.333333;
      }
      .offset-lg-11 {
        margin-left: 91.66666;
      }
      .dropdown-menu-lg-left {
        right: auto; left: 0;
      }
      .dropdown-menu-lg-right {
        right: 0; left: auto;
      }
      .navbar-expand-lg {
        -ms-flex-flow: row nowrap; flex-flow: row nowrap; -ms-flex-pack: start; justify-content: flex-start;
      }
      .navbar-expand-lg .navbar-nav {
        -ms-flex-direction: row; flex-direction: row;
      }
      .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute;
      }
      .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: .rem; padding-left: .rem;
      }
      .navbar-expand-lg>.container {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-lg>.container-fluid {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-lg>.container-lg {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-lg>.container-md {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-lg>.container-sm {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-lg>.container-xl {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-lg .navbar-collapse {
        display: flex !important; -ms-flex-preferred-size: auto; flex-basis: auto;
      }
      .navbar-expand-lg .navbar-toggler {
        display: none;
      }
      .list-group-horizontal-lg {
        -ms-flex-direction: row; flex-direction: row;
      }
      .list-group-horizontal-lg .list-group-item:first-child {
        border-bottom-left-radius: .2rem; border-top-right-radius: 0;
      }
      .list-group-horizontal-lg .list-group-item:last-child {
        border-top-right-radius: .2rem; border-bottom-left-radius: 0;
      }
      .list-group-horizontal-lg .list-group-item.active {
        margin-top: 0;
      }
      .list-group-horizontal-lg .list-group-item+.list-group-item {
        border-top-width: 1px; border-left-width: 0;
      }
      .list-group-horizontal-lg .list-group-item+.list-group-item.active {
        margin-left: -1px; border-left-width: 1px;
      }
      .modal-lg {
        max-width: 800px;
      }
      .modal-xl {
        max-width: 800px;
      }
      .d-lg-none {
        display: none !important;
      }
      .d-lg-inline {
        display: inline !important;
      }
      .d-lg-inline-block {
        display: inline-block !important;
      }
      .d-lg-block {
        display: block !important;
      }
      .d-lg-table {
        display: table !important;
      }
      .d-lg-table-row {
        display: table-row !important;
      }
      .d-lg-table-cell {
        display: table-cell !important;
      }
      .d-lg-flex {
        display: flex !important;
      }
      .d-lg-inline-flex {
        display: inline-flex !important;
      }
      .flex-lg-row {
        -ms-flex-direction: row !important; flex-direction: row !important;
      }
      .flex-lg-column {
        -ms-flex-direction: column !important; flex-direction: column !important;
      }
      .flex-lg-row-reverse {
        -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important;
      }
      .flex-lg-column-reverse {
        -ms-flex-direction: column-reverse !important; flex-direction: column-reverse !important;
      }
      .flex-lg-wrap {
        -ms-flex-wrap: wrap !important; flex-wrap: wrap !important;
      }
      .flex-lg-nowrap {
        -ms-flex-wrap: nowrap !important; flex-wrap: nowrap !important;
      }
      .flex-lg-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important; flex-wrap: wrap-reverse !important;
      }
      .flex-lg-fill {
        -ms-flex: 1 1 auto !important; flex: 1 1 auto !important;
      }
      .flex-lg-grow-0 {
        -ms-flex-positive: 0 !important; flex-grow: 0 !important;
      }
      .flex-lg-grow-1 {
        -ms-flex-positive: 1 !important; flex-grow: 1 !important;
      }
      .flex-lg-shrink-0 {
        -ms-flex-negative: 0 !important; flex-shrink: 0 !important;
      }
      .flex-lg-shrink-1 {
        -ms-flex-negative: 1 !important; flex-shrink: 1 !important;
      }
      .justify-content-lg-start {
        -ms-flex-pack: start !important; justify-content: flex-start !important;
      }
      .justify-content-lg-end {
        -ms-flex-pack: end !important; justify-content: flex-end !important;
      }
      .justify-content-lg-center {
        -ms-flex-pack: center !important; justify-content: center !important;
      }
      .justify-content-lg-between {
        -ms-flex-pack: justify !important; justify-content: space-between !important;
      }
      .justify-content-lg-around {
        -ms-flex-pack: distribute !important; justify-content: space-around !important;
      }
      .align-items-lg-start {
        -ms-flex-align: start !important; align-items: flex-start !important;
      }
      .align-items-lg-end {
        -ms-flex-align: end !important; align-items: flex-end !important;
      }
      .align-items-lg-center {
        -ms-flex-align: center !important; align-items: center !important;
      }
      .align-items-lg-baseline {
        -ms-flex-align: baseline !important; align-items: baseline !important;
      }
      .align-items-lg-stretch {
        -ms-flex-align: stretch !important; align-items: stretch !important;
      }
      .align-content-lg-start {
        -ms-flex-line-pack: start !important; align-content: flex-start !important;
      }
      .align-content-lg-end {
        -ms-flex-line-pack: end !important; align-content: flex-end !important;
      }
      .align-content-lg-center {
        -ms-flex-line-pack: center !important; align-content: center !important;
      }
      .align-content-lg-between {
        -ms-flex-line-pack: justify !important; align-content: space-between !important;
      }
      .align-content-lg-around {
        -ms-flex-line-pack: distribute !important; align-content: space-around !important;
      }
      .align-content-lg-stretch {
        -ms-flex-line-pack: stretch !important; align-content: stretch !important;
      }
      .align-self-lg-auto {
        -ms-flex-item-align: auto !important; align-self: auto !important;
      }
      .align-self-lg-start {
        -ms-flex-item-align: start !important; align-self: flex-start !important;
      }
      .align-self-lg-end {
        -ms-flex-item-align: end !important; align-self: flex-end !important;
      }
      .align-self-lg-center {
        -ms-flex-item-align: center !important; align-self: center !important;
      }
      .align-self-lg-baseline {
        -ms-flex-item-align: baseline !important; align-self: baseline !important;
      }
      .align-self-lg-stretch {
        -ms-flex-item-align: stretch !important; align-self: stretch !important;
      }
      .float-lg-left {
        float: left !important;
      }
      .float-lg-right {
        float: right !important;
      }
      .float-lg-none {
        float: none !important;
      }
      .m-lg-0 {
        margin: 0 !important;
      }
      .mt-lg-0 {
        margin-top: 0 !important;
      }
      .my-lg-0 {
        margin-top: 0 !important;
      }
      .mr-lg-0 {
        margin-right: 0 !important;
      }
      .mx-lg-0 {
        margin-right: 0 !important;
      }
      .mb-lg-0 {
        margin-bottom: 0 !important;
      }
      .my-lg-0 {
        margin-bottom: 0 !important;
      }
      .ml-lg-0 {
        margin-left: 0 !important;
      }
      .mx-lg-0 {
        margin-left: 0 !important;
      }
      .m-lg-1 {
        margin: .2rem !important;
      }
      .mt-lg-1 {
        margin-top: .2rem !important;
      }
      .my-lg-1 {
        margin-top: .2rem !important;
      }
      .mr-lg-1 {
        margin-right: .2rem !important;
      }
      .mx-lg-1 {
        margin-right: .2rem !important;
      }
      .mb-lg-1 {
        margin-bottom: .2rem !important;
      }
      .my-lg-1 {
        margin-bottom: .2rem !important;
      }
      .ml-lg-1 {
        margin-left: .2rem !important;
      }
      .mx-lg-1 {
        margin-left: .2rem !important;
      }
      .m-lg-2 {
        margin: .rem !important;
      }
      .mt-lg-2 {
        margin-top: .rem !important;
      }
      .my-lg-2 {
        margin-top: .rem !important;
      }
      .mr-lg-2 {
        margin-right: .rem !important;
      }
      .mx-lg-2 {
        margin-right: .rem !important;
      }
      .mb-lg-2 {
        margin-bottom: .rem !important;
      }
      .my-lg-2 {
        margin-bottom: .rem !important;
      }
      .ml-lg-2 {
        margin-left: .rem !important;
      }
      .mx-lg-2 {
        margin-left: .rem !important;
      }
      .m-lg-3 {
        margin: 1rem !important;
      }
      .mt-lg-3 {
        margin-top: 1rem !important;
      }
      .my-lg-3 {
        margin-top: 1rem !important;
      }
      .mr-lg-3 {
        margin-right: 1rem !important;
      }
      .mx-lg-3 {
        margin-right: 1rem !important;
      }
      .mb-lg-3 {
        margin-bottom: 1rem !important;
      }
      .my-lg-3 {
        margin-bottom: 1rem !important;
      }
      .ml-lg-3 {
        margin-left: 1rem !important;
      }
      .mx-lg-3 {
        margin-left: 1rem !important;
      }
      .m-lg-4 {
        margin: 1.rem !important;
      }
      .mt-lg-4 {
        margin-top: 1.rem !important;
      }
      .my-lg-4 {
        margin-top: 1.rem !important;
      }
      .mr-lg-4 {
        margin-right: 1.rem !important;
      }
      .mx-lg-4 {
        margin-right: 1.rem !important;
      }
      .mb-lg-4 {
        margin-bottom: 1.rem !important;
      }
      .my-lg-4 {
        margin-bottom: 1.rem !important;
      }
      .ml-lg-4 {
        margin-left: 1.rem !important;
      }
      .mx-lg-4 {
        margin-left: 1.rem !important;
      }
      .m-lg- {
        margin: 3rem !important;
      }
      .mt-lg- {
        margin-top: 3rem !important;
      }
      .my-lg- {
        margin-top: 3rem !important;
      }
      .mr-lg- {
        margin-right: 3rem !important;
      }
      .mx-lg- {
        margin-right: 3rem !important;
      }
      .mb-lg- {
        margin-bottom: 3rem !important;
      }
      .my-lg- {
        margin-bottom: 3rem !important;
      }
      .ml-lg- {
        margin-left: 3rem !important;
      }
      .mx-lg- {
        margin-left: 3rem !important;
      }
      .p-lg-0 {
        padding: 0 !important;
      }
      .pt-lg-0 {
        padding-top: 0 !important;
      }
      .py-lg-0 {
        padding-top: 0 !important;
      }
      .pr-lg-0 {
        padding-right: 0 !important;
      }
      .px-lg-0 {
        padding-right: 0 !important;
      }
      .pb-lg-0 {
        padding-bottom: 0 !important;
      }
      .py-lg-0 {
        padding-bottom: 0 !important;
      }
      .pl-lg-0 {
        padding-left: 0 !important;
      }
      .px-lg-0 {
        padding-left: 0 !important;
      }
      .p-lg-1 {
        padding: .2rem !important;
      }
      .pt-lg-1 {
        padding-top: .2rem !important;
      }
      .py-lg-1 {
        padding-top: .2rem !important;
      }
      .pr-lg-1 {
        padding-right: .2rem !important;
      }
      .px-lg-1 {
        padding-right: .2rem !important;
      }
      .pb-lg-1 {
        padding-bottom: .2rem !important;
      }
      .py-lg-1 {
        padding-bottom: .2rem !important;
      }
      .pl-lg-1 {
        padding-left: .2rem !important;
      }
      .px-lg-1 {
        padding-left: .2rem !important;
      }
      .p-lg-2 {
        padding: .rem !important;
      }
      .pt-lg-2 {
        padding-top: .rem !important;
      }
      .py-lg-2 {
        padding-top: .rem !important;
      }
      .pr-lg-2 {
        padding-right: .rem !important;
      }
      .px-lg-2 {
        padding-right: .rem !important;
      }
      .pb-lg-2 {
        padding-bottom: .rem !important;
      }
      .py-lg-2 {
        padding-bottom: .rem !important;
      }
      .pl-lg-2 {
        padding-left: .rem !important;
      }
      .px-lg-2 {
        padding-left: .rem !important;
      }
      .p-lg-3 {
        padding: 1rem !important;
      }
      .pt-lg-3 {
        padding-top: 1rem !important;
      }
      .py-lg-3 {
        padding-top: 1rem !important;
      }
      .pr-lg-3 {
        padding-right: 1rem !important;
      }
      .px-lg-3 {
        padding-right: 1rem !important;
      }
      .pb-lg-3 {
        padding-bottom: 1rem !important;
      }
      .py-lg-3 {
        padding-bottom: 1rem !important;
      }
      .pl-lg-3 {
        padding-left: 1rem !important;
      }
      .px-lg-3 {
        padding-left: 1rem !important;
      }
      .p-lg-4 {
        padding: 1.rem !important;
      }
      .pt-lg-4 {
        padding-top: 1.rem !important;
      }
      .py-lg-4 {
        padding-top: 1.rem !important;
      }
      .pr-lg-4 {
        padding-right: 1.rem !important;
      }
      .px-lg-4 {
        padding-right: 1.rem !important;
      }
      .pb-lg-4 {
        padding-bottom: 1.rem !important;
      }
      .py-lg-4 {
        padding-bottom: 1.rem !important;
      }
      .pl-lg-4 {
        padding-left: 1.rem !important;
      }
      .px-lg-4 {
        padding-left: 1.rem !important;
      }
      .p-lg- {
        padding: 3rem !important;
      }
      .pt-lg- {
        padding-top: 3rem !important;
      }
      .py-lg- {
        padding-top: 3rem !important;
      }
      .pr-lg- {
        padding-right: 3rem !important;
      }
      .px-lg- {
        padding-right: 3rem !important;
      }
      .pb-lg- {
        padding-bottom: 3rem !important;
      }
      .py-lg- {
        padding-bottom: 3rem !important;
      }
      .pl-lg- {
        padding-left: 3rem !important;
      }
      .px-lg- {
        padding-left: 3rem !important;
      }
      .m-lg-n1 {
        margin: -.2rem !important;
      }
      .mt-lg-n1 {
        margin-top: -.2rem !important;
      }
      .my-lg-n1 {
        margin-top: -.2rem !important;
      }
      .mr-lg-n1 {
        margin-right: -.2rem !important;
      }
      .mx-lg-n1 {
        margin-right: -.2rem !important;
      }
      .mb-lg-n1 {
        margin-bottom: -.2rem !important;
      }
      .my-lg-n1 {
        margin-bottom: -.2rem !important;
      }
      .ml-lg-n1 {
        margin-left: -.2rem !important;
      }
      .mx-lg-n1 {
        margin-left: -.2rem !important;
      }
      .m-lg-n2 {
        margin: -.rem !important;
      }
      .mt-lg-n2 {
        margin-top: -.rem !important;
      }
      .my-lg-n2 {
        margin-top: -.rem !important;
      }
      .mr-lg-n2 {
        margin-right: -.rem !important;
      }
      .mx-lg-n2 {
        margin-right: -.rem !important;
      }
      .mb-lg-n2 {
        margin-bottom: -.rem !important;
      }
      .my-lg-n2 {
        margin-bottom: -.rem !important;
      }
      .ml-lg-n2 {
        margin-left: -.rem !important;
      }
      .mx-lg-n2 {
        margin-left: -.rem !important;
      }
      .m-lg-n3 {
        margin: -1rem !important;
      }
      .mt-lg-n3 {
        margin-top: -1rem !important;
      }
      .my-lg-n3 {
        margin-top: -1rem !important;
      }
      .mr-lg-n3 {
        margin-right: -1rem !important;
      }
      .mx-lg-n3 {
        margin-right: -1rem !important;
      }
      .mb-lg-n3 {
        margin-bottom: -1rem !important;
      }
      .my-lg-n3 {
        margin-bottom: -1rem !important;
      }
      .ml-lg-n3 {
        margin-left: -1rem !important;
      }
      .mx-lg-n3 {
        margin-left: -1rem !important;
      }
      .m-lg-n4 {
        margin: -1.rem !important;
      }
      .mt-lg-n4 {
        margin-top: -1.rem !important;
      }
      .my-lg-n4 {
        margin-top: -1.rem !important;
      }
      .mr-lg-n4 {
        margin-right: -1.rem !important;
      }
      .mx-lg-n4 {
        margin-right: -1.rem !important;
      }
      .mb-lg-n4 {
        margin-bottom: -1.rem !important;
      }
      .my-lg-n4 {
        margin-bottom: -1.rem !important;
      }
      .ml-lg-n4 {
        margin-left: -1.rem !important;
      }
      .mx-lg-n4 {
        margin-left: -1.rem !important;
      }
      .m-lg-n {
        margin: -3rem !important;
      }
      .mt-lg-n {
        margin-top: -3rem !important;
      }
      .my-lg-n {
        margin-top: -3rem !important;
      }
      .mr-lg-n {
        margin-right: -3rem !important;
      }
      .mx-lg-n {
        margin-right: -3rem !important;
      }
      .mb-lg-n {
        margin-bottom: -3rem !important;
      }
      .my-lg-n {
        margin-bottom: -3rem !important;
      }
      .ml-lg-n {
        margin-left: -3rem !important;
      }
      .mx-lg-n {
        margin-left: -3rem !important;
      }
      .m-lg-auto {
        margin: auto !important;
      }
      .mt-lg-auto {
        margin-top: auto !important;
      }
      .my-lg-auto {
        margin-top: auto !important;
      }
      .mr-lg-auto {
        margin-right: auto !important;
      }
      .mx-lg-auto {
        margin-right: auto !important;
      }
      .mb-lg-auto {
        margin-bottom: auto !important;
      }
      .my-lg-auto {
        margin-bottom: auto !important;
      }
      .ml-lg-auto {
        margin-left: auto !important;
      }
      .mx-lg-auto {
        margin-left: auto !important;
      }
      .text-lg-left {
        text-align: left !important;
      }
      .text-lg-right {
        text-align: right !important;
      }
      .text-lg-center {
        text-align: center !important;
      }
    }
    @media (min-width:1200px) {
      .container {
        max-width: 1140px;
      }
      .container {
        max-width: 1140px;
      }
      .container-lg {
        max-width: 1140px;
      }
      .container-md {
        max-width: 1140px;
      }
      .container-sm {
        max-width: 1140px;
      }
      .container-xl {
        max-width: 1140px;
      }
      .col-xl {
        -ms-flex-preferred-size: 0; flex-basis: 0; -ms-flex-positive: 1; flex-grow: 1; max-width: 100;
      }
      .row-cols-xl-1>* {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .row-cols-xl-2>* {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .row-cols-xl-3>* {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .row-cols-xl-4>* {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .row-cols-xl->* {
        -ms-flex: 0 0 20; flex: 0 0 20; max-width: 20;
      }
      .row-cols-xl-6>* {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-xl-auto {
        -ms-flex: 0 0 auto; flex: 0 0 auto; width: auto; max-width: 100;
      }
      .col-xl-1 {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-xl-2 {
        -ms-flex: 0 0 16.66666; flex: 0 0 16.66666; max-width: 16.66666;
      }
      .col-xl-3 {
        -ms-flex: 0 0 2; flex: 0 0 2; max-width: 2;
      }
      .col-xl-4 {
        -ms-flex: 0 0 33.333333; flex: 0 0 33.333333; max-width: 33.333333;
      }
      .col-xl- {
        -ms-flex: 0 0 41.66666; flex: 0 0 41.66666; max-width: 41.66666;
      }
      .col-xl-6 {
        -ms-flex: 0 0 0; flex: 0 0 0; max-width: 0;
      }
      .col-xl- {
        -ms-flex: 0 0 8.333333; flex: 0 0 8.333333; max-width: 8.333333;
      }
      .col-xl-8 {
        -ms-flex: 0 0 66.66666; flex: 0 0 66.66666; max-width: 66.66666;
      }
      .col-xl-9 {
        -ms-flex: 0 0 ; flex: 0 0 ; max-width: ;
      }
      .col-xl-10 {
        -ms-flex: 0 0 83.333333; flex: 0 0 83.333333; max-width: 83.333333;
      }
      .col-xl-11 {
        -ms-flex: 0 0 91.66666; flex: 0 0 91.66666; max-width: 91.66666;
      }
      .col-xl-12 {
        -ms-flex: 0 0 100; flex: 0 0 100; max-width: 100;
      }
      .order-xl-first {
        -ms-flex-order: -1; order: -1;
      }
      .order-xl-last {
        -ms-flex-order: 13; order: 13;
      }
      .order-xl-0 {
        -ms-flex-order: 0; order: 0;
      }
      .order-xl-1 {
        -ms-flex-order: 1; order: 1;
      }
      .order-xl-2 {
        -ms-flex-order: 2; order: 2;
      }
      .order-xl-3 {
        -ms-flex-order: 3; order: 3;
      }
      .order-xl-4 {
        -ms-flex-order: 4; order: 4;
      }
      .order-xl- {
        -ms-flex-order: ; order: ;
      }
      .order-xl-6 {
        -ms-flex-order: 6; order: 6;
      }
      .order-xl- {
        -ms-flex-order: ; order: ;
      }
      .order-xl-8 {
        -ms-flex-order: 8; order: 8;
      }
      .order-xl-9 {
        -ms-flex-order: 9; order: 9;
      }
      .order-xl-10 {
        -ms-flex-order: 10; order: 10;
      }
      .order-xl-11 {
        -ms-flex-order: 11; order: 11;
      }
      .order-xl-12 {
        -ms-flex-order: 12; order: 12;
      }
      .offset-xl-0 {
        margin-left: 0;
      }
      .offset-xl-1 {
        margin-left: 8.333333;
      }
      .offset-xl-2 {
        margin-left: 16.66666;
      }
      .offset-xl-3 {
        margin-left: 2;
      }
      .offset-xl-4 {
        margin-left: 33.333333;
      }
      .offset-xl- {
        margin-left: 41.66666;
      }
      .offset-xl-6 {
        margin-left: 0;
      }
      .offset-xl- {
        margin-left: 8.333333;
      }
      .offset-xl-8 {
        margin-left: 66.66666;
      }
      .offset-xl-9 {
        margin-left: ;
      }
      .offset-xl-10 {
        margin-left: 83.333333;
      }
      .offset-xl-11 {
        margin-left: 91.66666;
      }
      .dropdown-menu-xl-left {
        right: auto; left: 0;
      }
      .dropdown-menu-xl-right {
        right: 0; left: auto;
      }
      .navbar-expand-xl {
        -ms-flex-flow: row nowrap; flex-flow: row nowrap; -ms-flex-pack: start; justify-content: flex-start;
      }
      .navbar-expand-xl .navbar-nav {
        -ms-flex-direction: row; flex-direction: row;
      }
      .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute;
      }
      .navbar-expand-xl .navbar-nav .nav-link {
        padding-right: .rem; padding-left: .rem;
      }
      .navbar-expand-xl>.container {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-xl>.container-fluid {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-xl>.container-lg {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-xl>.container-md {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-xl>.container-sm {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-xl>.container-xl {
        -ms-flex-wrap: nowrap; flex-wrap: nowrap;
      }
      .navbar-expand-xl .navbar-collapse {
        display: flex !important; -ms-flex-preferred-size: auto; flex-basis: auto;
      }
      .navbar-expand-xl .navbar-toggler {
        display: none;
      }
      .list-group-horizontal-xl {
        -ms-flex-direction: row; flex-direction: row;
      }
      .list-group-horizontal-xl .list-group-item:first-child {
        border-bottom-left-radius: .2rem; border-top-right-radius: 0;
      }
      .list-group-horizontal-xl .list-group-item:last-child {
        border-top-right-radius: .2rem; border-bottom-left-radius: 0;
      }
      .list-group-horizontal-xl .list-group-item.active {
        margin-top: 0;
      }
      .list-group-horizontal-xl .list-group-item+.list-group-item {
        border-top-width: 1px; border-left-width: 0;
      }
      .list-group-horizontal-xl .list-group-item+.list-group-item.active {
        margin-left: -1px; border-left-width: 1px;
      }
      .modal-xl {
        max-width: 1140px;
      }
      .d-xl-none {
        display: none !important;
      }
      .d-xl-inline {
        display: inline !important;
      }
      .d-xl-inline-block {
        display: inline-block !important;
      }
      .d-xl-block {
        display: block !important;
      }
      .d-xl-table {
        display: table !important;
      }
      .d-xl-table-row {
        display: table-row !important;
      }
      .d-xl-table-cell {
        display: table-cell !important;
      }
      .d-xl-flex {
        display: flex !important;
      }
      .d-xl-inline-flex {
        display: inline-flex !important;
      }
      .flex-xl-row {
        -ms-flex-direction: row !important; flex-direction: row !important;
      }
      .flex-xl-column {
        -ms-flex-direction: column !important; flex-direction: column !important;
      }
      .flex-xl-row-reverse {
        -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important;
      }
      .flex-xl-column-reverse {
        -ms-flex-direction: column-reverse !important; flex-direction: column-reverse !important;
      }
      .flex-xl-wrap {
        -ms-flex-wrap: wrap !important; flex-wrap: wrap !important;
      }
      .flex-xl-nowrap {
        -ms-flex-wrap: nowrap !important; flex-wrap: nowrap !important;
      }
      .flex-xl-wrap-reverse {
        -ms-flex-wrap: wrap-reverse !important; flex-wrap: wrap-reverse !important;
      }
      .flex-xl-fill {
        -ms-flex: 1 1 auto !important; flex: 1 1 auto !important;
      }
      .flex-xl-grow-0 {
        -ms-flex-positive: 0 !important; flex-grow: 0 !important;
      }
      .flex-xl-grow-1 {
        -ms-flex-positive: 1 !important; flex-grow: 1 !important;
      }
      .flex-xl-shrink-0 {
        -ms-flex-negative: 0 !important; flex-shrink: 0 !important;
      }
      .flex-xl-shrink-1 {
        -ms-flex-negative: 1 !important; flex-shrink: 1 !important;
      }
      .justify-content-xl-start {
        -ms-flex-pack: start !important; justify-content: flex-start !important;
      }
      .justify-content-xl-end {
        -ms-flex-pack: end !important; justify-content: flex-end !important;
      }
      .justify-content-xl-center {
        -ms-flex-pack: center !important; justify-content: center !important;
      }
      .justify-content-xl-between {
        -ms-flex-pack: justify !important; justify-content: space-between !important;
      }
      .justify-content-xl-around {
        -ms-flex-pack: distribute !important; justify-content: space-around !important;
      }
      .align-items-xl-start {
        -ms-flex-align: start !important; align-items: flex-start !important;
      }
      .align-items-xl-end {
        -ms-flex-align: end !important; align-items: flex-end !important;
      }
      .align-items-xl-center {
        -ms-flex-align: center !important; align-items: center !important;
      }
      .align-items-xl-baseline {
        -ms-flex-align: baseline !important; align-items: baseline !important;
      }
      .align-items-xl-stretch {
        -ms-flex-align: stretch !important; align-items: stretch !important;
      }
      .align-content-xl-start {
        -ms-flex-line-pack: start !important; align-content: flex-start !important;
      }
      .align-content-xl-end {
        -ms-flex-line-pack: end !important; align-content: flex-end !important;
      }
      .align-content-xl-center {
        -ms-flex-line-pack: center !important; align-content: center !important;
      }
      .align-content-xl-between {
        -ms-flex-line-pack: justify !important; align-content: space-between !important;
      }
      .align-content-xl-around {
        -ms-flex-line-pack: distribute !important; align-content: space-around !important;
      }
      .align-content-xl-stretch {
        -ms-flex-line-pack: stretch !important; align-content: stretch !important;
      }
      .align-self-xl-auto {
        -ms-flex-item-align: auto !important; align-self: auto !important;
      }
      .align-self-xl-start {
        -ms-flex-item-align: start !important; align-self: flex-start !important;
      }
      .align-self-xl-end {
        -ms-flex-item-align: end !important; align-self: flex-end !important;
      }
      .align-self-xl-center {
        -ms-flex-item-align: center !important; align-self: center !important;
      }
      .align-self-xl-baseline {
        -ms-flex-item-align: baseline !important; align-self: baseline !important;
      }
      .align-self-xl-stretch {
        -ms-flex-item-align: stretch !important; align-self: stretch !important;
      }
      .float-xl-left {
        float: left !important;
      }
      .float-xl-right {
        float: right !important;
      }
      .float-xl-none {
        float: none !important;
      }
      .m-xl-0 {
        margin: 0 !important;
      }
      .mt-xl-0 {
        margin-top: 0 !important;
      }
      .my-xl-0 {
        margin-top: 0 !important;
      }
      .mr-xl-0 {
        margin-right: 0 !important;
      }
      .mx-xl-0 {
        margin-right: 0 !important;
      }
      .mb-xl-0 {
        margin-bottom: 0 !important;
      }
      .my-xl-0 {
        margin-bottom: 0 !important;
      }
      .ml-xl-0 {
        margin-left: 0 !important;
      }
      .mx-xl-0 {
        margin-left: 0 !important;
      }
      .m-xl-1 {
        margin: .2rem !important;
      }
      .mt-xl-1 {
        margin-top: .2rem !important;
      }
      .my-xl-1 {
        margin-top: .2rem !important;
      }
      .mr-xl-1 {
        margin-right: .2rem !important;
      }
      .mx-xl-1 {
        margin-right: .2rem !important;
      }
      .mb-xl-1 {
        margin-bottom: .2rem !important;
      }
      .my-xl-1 {
        margin-bottom: .2rem !important;
      }
      .ml-xl-1 {
        margin-left: .2rem !important;
      }
      .mx-xl-1 {
        margin-left: .2rem !important;
      }
      .m-xl-2 {
        margin: .rem !important;
      }
      .mt-xl-2 {
        margin-top: .rem !important;
      }
      .my-xl-2 {
        margin-top: .rem !important;
      }
      .mr-xl-2 {
        margin-right: .rem !important;
      }
      .mx-xl-2 {
        margin-right: .rem !important;
      }
      .mb-xl-2 {
        margin-bottom: .rem !important;
      }
      .my-xl-2 {
        margin-bottom: .rem !important;
      }
      .ml-xl-2 {
        margin-left: .rem !important;
      }
      .mx-xl-2 {
        margin-left: .rem !important;
      }
      .m-xl-3 {
        margin: 1rem !important;
      }
      .mt-xl-3 {
        margin-top: 1rem !important;
      }
      .my-xl-3 {
        margin-top: 1rem !important;
      }
      .mr-xl-3 {
        margin-right: 1rem !important;
      }
      .mx-xl-3 {
        margin-right: 1rem !important;
      }
      .mb-xl-3 {
        margin-bottom: 1rem !important;
      }
      .my-xl-3 {
        margin-bottom: 1rem !important;
      }
      .ml-xl-3 {
        margin-left: 1rem !important;
      }
      .mx-xl-3 {
        margin-left: 1rem !important;
      }
      .m-xl-4 {
        margin: 1.rem !important;
      }
      .mt-xl-4 {
        margin-top: 1.rem !important;
      }
      .my-xl-4 {
        margin-top: 1.rem !important;
      }
      .mr-xl-4 {
        margin-right: 1.rem !important;
      }
      .mx-xl-4 {
        margin-right: 1.rem !important;
      }
      .mb-xl-4 {
        margin-bottom: 1.rem !important;
      }
      .my-xl-4 {
        margin-bottom: 1.rem !important;
      }
      .ml-xl-4 {
        margin-left: 1.rem !important;
      }
      .mx-xl-4 {
        margin-left: 1.rem !important;
      }
      .m-xl- {
        margin: 3rem !important;
      }
      .mt-xl- {
        margin-top: 3rem !important;
      }
      .my-xl- {
        margin-top: 3rem !important;
      }
      .mr-xl- {
        margin-right: 3rem !important;
      }
      .mx-xl- {
        margin-right: 3rem !important;
      }
      .mb-xl- {
        margin-bottom: 3rem !important;
      }
      .my-xl- {
        margin-bottom: 3rem !important;
      }
      .ml-xl- {
        margin-left: 3rem !important;
      }
      .mx-xl- {
        margin-left: 3rem !important;
      }
      .p-xl-0 {
        padding: 0 !important;
      }
      .pt-xl-0 {
        padding-top: 0 !important;
      }
      .py-xl-0 {
        padding-top: 0 !important;
      }
      .pr-xl-0 {
        padding-right: 0 !important;
      }
      .px-xl-0 {
        padding-right: 0 !important;
      }
      .pb-xl-0 {
        padding-bottom: 0 !important;
      }
      .py-xl-0 {
        padding-bottom: 0 !important;
      }
      .pl-xl-0 {
        padding-left: 0 !important;
      }
      .px-xl-0 {
        padding-left: 0 !important;
      }
      .p-xl-1 {
        padding: .2rem !important;
      }
      .pt-xl-1 {
        padding-top: .2rem !important;
      }
      .py-xl-1 {
        padding-top: .2rem !important;
      }
      .pr-xl-1 {
        padding-right: .2rem !important;
      }
      .px-xl-1 {
        padding-right: .2rem !important;
      }
      .pb-xl-1 {
        padding-bottom: .2rem !important;
      }
      .py-xl-1 {
        padding-bottom: .2rem !important;
      }
      .pl-xl-1 {
        padding-left: .2rem !important;
      }
      .px-xl-1 {
        padding-left: .2rem !important;
      }
      .p-xl-2 {
        padding: .rem !important;
      }
      .pt-xl-2 {
        padding-top: .rem !important;
      }
      .py-xl-2 {
        padding-top: .rem !important;
      }
      .pr-xl-2 {
        padding-right: .rem !important;
      }
      .px-xl-2 {
        padding-right: .rem !important;
      }
      .pb-xl-2 {
        padding-bottom: .rem !important;
      }
      .py-xl-2 {
        padding-bottom: .rem !important;
      }
      .pl-xl-2 {
        padding-left: .rem !important;
      }
      .px-xl-2 {
        padding-left: .rem !important;
      }
      .p-xl-3 {
        padding: 1rem !important;
      }
      .pt-xl-3 {
        padding-top: 1rem !important;
      }
      .py-xl-3 {
        padding-top: 1rem !important;
      }
      .pr-xl-3 {
        padding-right: 1rem !important;
      }
      .px-xl-3 {
        padding-right: 1rem !important;
      }
      .pb-xl-3 {
        padding-bottom: 1rem !important;
      }
      .py-xl-3 {
        padding-bottom: 1rem !important;
      }
      .pl-xl-3 {
        padding-left: 1rem !important;
      }
      .px-xl-3 {
        padding-left: 1rem !important;
      }
      .p-xl-4 {
        padding: 1.rem !important;
      }
      .pt-xl-4 {
        padding-top: 1.rem !important;
      }
      .py-xl-4 {
        padding-top: 1.rem !important;
      }
      .pr-xl-4 {
        padding-right: 1.rem !important;
      }
      .px-xl-4 {
        padding-right: 1.rem !important;
      }
      .pb-xl-4 {
        padding-bottom: 1.rem !important;
      }
      .py-xl-4 {
        padding-bottom: 1.rem !important;
      }
      .pl-xl-4 {
        padding-left: 1.rem !important;
      }
      .px-xl-4 {
        padding-left: 1.rem !important;
      }
      .p-xl- {
        padding: 3rem !important;
      }
      .pt-xl- {
        padding-top: 3rem !important;
      }
      .py-xl- {
        padding-top: 3rem !important;
      }
      .pr-xl- {
        padding-right: 3rem !important;
      }
      .px-xl- {
        padding-right: 3rem !important;
      }
      .pb-xl- {
        padding-bottom: 3rem !important;
      }
      .py-xl- {
        padding-bottom: 3rem !important;
      }
      .pl-xl- {
        padding-left: 3rem !important;
      }
      .px-xl- {
        padding-left: 3rem !important;
      }
      .m-xl-n1 {
        margin: -.2rem !important;
      }
      .mt-xl-n1 {
        margin-top: -.2rem !important;
      }
      .my-xl-n1 {
        margin-top: -.2rem !important;
      }
      .mr-xl-n1 {
        margin-right: -.2rem !important;
      }
      .mx-xl-n1 {
        margin-right: -.2rem !important;
      }
      .mb-xl-n1 {
        margin-bottom: -.2rem !important;
      }
      .my-xl-n1 {
        margin-bottom: -.2rem !important;
      }
      .ml-xl-n1 {
        margin-left: -.2rem !important;
      }
      .mx-xl-n1 {
        margin-left: -.2rem !important;
      }
      .m-xl-n2 {
        margin: -.rem !important;
      }
      .mt-xl-n2 {
        margin-top: -.rem !important;
      }
      .my-xl-n2 {
        margin-top: -.rem !important;
      }
      .mr-xl-n2 {
        margin-right: -.rem !important;
      }
      .mx-xl-n2 {
        margin-right: -.rem !important;
      }
      .mb-xl-n2 {
        margin-bottom: -.rem !important;
      }
      .my-xl-n2 {
        margin-bottom: -.rem !important;
      }
      .ml-xl-n2 {
        margin-left: -.rem !important;
      }
      .mx-xl-n2 {
        margin-left: -.rem !important;
      }
      .m-xl-n3 {
        margin: -1rem !important;
      }
      .mt-xl-n3 {
        margin-top: -1rem !important;
      }
      .my-xl-n3 {
        margin-top: -1rem !important;
      }
      .mr-xl-n3 {
        margin-right: -1rem !important;
      }
      .mx-xl-n3 {
        margin-right: -1rem !important;
      }
      .mb-xl-n3 {
        margin-bottom: -1rem !important;
      }
      .my-xl-n3 {
        margin-bottom: -1rem !important;
      }
      .ml-xl-n3 {
        margin-left: -1rem !important;
      }
      .mx-xl-n3 {
        margin-left: -1rem !important;
      }
      .m-xl-n4 {
        margin: -1.rem !important;
      }
      .mt-xl-n4 {
        margin-top: -1.rem !important;
      }
      .my-xl-n4 {
        margin-top: -1.rem !important;
      }
      .mr-xl-n4 {
        margin-right: -1.rem !important;
      }
      .mx-xl-n4 {
        margin-right: -1.rem !important;
      }
      .mb-xl-n4 {
        margin-bottom: -1.rem !important;
      }
      .my-xl-n4 {
        margin-bottom: -1.rem !important;
      }
      .ml-xl-n4 {
        margin-left: -1.rem !important;
      }
      .mx-xl-n4 {
        margin-left: -1.rem !important;
      }
      .m-xl-n {
        margin: -3rem !important;
      }
      .mt-xl-n {
        margin-top: -3rem !important;
      }
      .my-xl-n {
        margin-top: -3rem !important;
      }
      .mr-xl-n {
        margin-right: -3rem !important;
      }
      .mx-xl-n {
        margin-right: -3rem !important;
      }
      .mb-xl-n {
        margin-bottom: -3rem !important;
      }
      .my-xl-n {
        margin-bottom: -3rem !important;
      }
      .ml-xl-n {
        margin-left: -3rem !important;
      }
      .mx-xl-n {
        margin-left: -3rem !important;
      }
      .m-xl-auto {
        margin: auto !important;
      }
      .mt-xl-auto {
        margin-top: auto !important;
      }
      .my-xl-auto {
        margin-top: auto !important;
      }
      .mr-xl-auto {
        margin-right: auto !important;
      }
      .mx-xl-auto {
        margin-right: auto !important;
      }
      .mb-xl-auto {
        margin-bottom: auto !important;
      }
      .my-xl-auto {
        margin-bottom: auto !important;
      }
      .ml-xl-auto {
        margin-left: auto !important;
      }
      .mx-xl-auto {
        margin-left: auto !important;
      }
      .text-xl-left {
        text-align: left !important;
      }
      .text-xl-right {
        text-align: right !important;
      }
      .text-xl-center {
        text-align: center !important;
      }
    }
    @media (max-width:.98px) {
      .table-responsive-sm {
        display: block; width: 100; overflow-x: auto; -webkit-overflow-scrolling: touch;
      }
      .table-responsive-sm>.table-bordered {
        border: 0;
      }
      .navbar-expand-sm>.container {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-sm>.container-fluid {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-sm>.container-lg {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-sm>.container-md {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-sm>.container-sm {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-sm>.container-xl {
        padding-right: 0; padding-left: 0;
      }
    }
    @media (max-width:6.98px) {
      .table-responsive-md {
        display: block; width: 100; overflow-x: auto; -webkit-overflow-scrolling: touch;
      }
      .table-responsive-md>.table-bordered {
        border: 0;
      }
      .navbar-expand-md>.container {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-md>.container-fluid {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-md>.container-lg {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-md>.container-md {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-md>.container-sm {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-md>.container-xl {
        padding-right: 0; padding-left: 0;
      }
    }
    @media (max-width:991.98px) {
      .table-responsive-lg {
        display: block; width: 100; overflow-x: auto; -webkit-overflow-scrolling: touch;
      }
      .table-responsive-lg>.table-bordered {
        border: 0;
      }
      .navbar-expand-lg>.container {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-lg>.container-fluid {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-lg>.container-lg {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-lg>.container-md {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-lg>.container-sm {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-lg>.container-xl {
        padding-right: 0; padding-left: 0;
      }
    }
    @media (max-width:1199.98px) {
      .table-responsive-xl {
        display: block; width: 100; overflow-x: auto; -webkit-overflow-scrolling: touch;
      }
      .table-responsive-xl>.table-bordered {
        border: 0;
      }
      .navbar-expand-xl>.container {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-xl>.container-fluid {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-xl>.container-lg {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-xl>.container-md {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-xl>.container-sm {
        padding-right: 0; padding-left: 0;
      }
      .navbar-expand-xl>.container-xl {
        padding-right: 0; padding-left: 0;
      }
    }
    @media (prefers-reduced-motion:reduce) {
      .form-control {
        transition: none;
      }
      .btn {
        transition: none;
      }
      .fade {
        transition: none;
      }
      .collapsing {
        transition: none;
      }
      .custom-switch .custom-control-label::after {
        transition: none;
      }
      .custom-range::-webkit-slider-thumb {
        -webkit-transition: none; transition: none;
      }
      .custom-range::-moz-range-thumb {
        -moz-transition: none; transition: none;
      }
      .custom-range::-ms-thumb {
        -ms-transition: none; transition: none;
      }
      .custom-control-label::before {
        transition: none;
      }
      .custom-file-label {
        transition: none;
      }
      .custom-select {
        transition: none;
      }
      .badge {
        transition: none;
      }
      .progress-bar {
        transition: none;
      }
      .progress-bar-animated {
        -webkit-animation: none; animation: none;
      }
      .modal.fade .modal-dialog {
        transition: none;
      }
      .carousel-item {
        transition: none;
      }
      .carousel-fade .active.carousel-item-left {
        transition: none;
      }
      .carousel-fade .active.carousel-item-right {
        transition: none;
      }
      .carousel-control-next {
        transition: none;
      }
      .carousel-control-prev {
        transition: none;
      }
      .carousel-indicators li {
        transition: none;
      }
    }
    @media print {
      ::after {
        text-shadow: none !important; box-shadow: none !important;
      }
      ::before {
        text-shadow: none !important; box-shadow: none !important;
      }
      abbr[title]::after {
        content: " (" attr(title) ")";
      }
      @page {
        size: a3;
      }
    }
    @media only screen and (max-width:600px) {
      .navarLogo {
        font-size: 18px; margin-left: 3vw; padding: 1px 0;
      }
      .nav-link {
        font-size: 16px; width: 100vw;
      }
      .navbar-nav {
        border-width: medium 1px 1px; border-top: 1px solid rgba(98,99,101,.);
      }
      #navAbout {
        padding: 20px 2px;
      }
      #navContact {
        padding: 20px 2px;
      }
      #navHome {
        padding: 20px 2px;
      }
      #navService {
        padding: 20px 2px;
      }
      .mt-2 {
        margin-top: 0 !important;
      }
      .my-2 {
        margin-top: 0 !important;
      }
    }
    @media only screen and (min-width:601px)and (max-width:1000px) {
      .navarLogo {
        font-size: 24px;
      }
      .nav-link {
        font-size: 16px; text-align: center; margin: 0 3px; padding: 30px;
      }
      .mb-2 {
        margin-bottom: 0 !important;
      }
      .my-2 {
        margin-bottom: 0 !important;
      }
    }
    @media only screen and (max-width:349px) {
      .homeTop {
        background: linear-gradient(rgba(20,20,20,.),rgba(20,20,20,.)),url('https://radhard.herokuapp.com/images/satellite-10309_1920_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .bannerContainer {
        margin-left: px; top: 4px;
      }
      .homeanner {
        color: #fff; font-weight: 600; font-size: 28px;
      }
      .homeannerText {
        font-size: 14px; width: vw; color: hsla(0,0,86.3,.9);
      }
      .contactUstn {
        position: relative; left: px; top: 4px; background-color: #099bca; font-weight: 600; font-size: medium; padding: 0 1px; border: #fff; border-radius: 20px; height: 40px;
      }
      .homeottom {
        top: 60px;
      }
      .homeTitle {
        font-size: 28px;
      }
      .homeText {
        font-size: 16px; margin: 2px px;
      }
      .aboutanner {
        background: url('https://radhard.herokuapp.com/images/astronaut_about_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .whoWeAre {
        top: vw; font-size: 28px; color: hsla(0,0,100,.9);
      }
      .aboutContent {
        top: 60px; height: 0vh;
      }
      .aboutTitle {
        font-size: 28px;
      }
      .serviceanner {
        background: url('https://radhard.herokuapp.com/images/spacex-VNb2J8Trk-unsplash_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .whatWeo {
        top: vw; font-size: 28px;
      }
      .serviceContent {
        position: relative; top: 60px;
      }
      .serviceTitle {
        font-size: 28px;
      }
      .aboutUsTitle {
        background: url('https://radhard.herokuapp.com/images/openstreet_contact_banner_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .contactPage {
        top: 60px;
      }
      .contactTitle {
        font-size: 28px;
      }
      .contactContent {
        top: 20px;
      }
      .contactUs {
        font-size: 24px;
      }
      .ourOffice {
        font-size: 24px;
      }
      .contactUs {
        margin-top: 20px;
      }
    }
    @media only screen and (min-width:30px) and (max-width:68px) {
      .homeTop {
        background: linear-gradient(rgba(20,20,20,.),rgba(20,20,20,.)),url('https://radhard.herokuapp.com/images/satellite-10309_1920_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .bannerContainer {
        margin-left: px; top: 12vw;
      }
      .homeanner {
        color: #dcdcdc; font-weight: 600; font-size: 36px;
      }
      .homeannerText {
        font-size: 18px; width: vw; color: hsla(0,0,86.3,.9);
      }
      .contactUstn {
        position: relative; left: 10px; top: 12vw; background-color: #099bca; font-weight: 600; font-size: medium; padding: 0 1px; border: #fff; border-radius: 20px; height: 40px;
      }
      .homeottom {
        top: 60px;
      }
      .homeTitle {
        font-size: 28px;
      }
      .homeText {
        font-size: 16px; margin: 2px px;
      }
      .aboutanner {
        background: url('https://radhard.herokuapp.com/images/astronaut_about_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .whoWeAre {
        top: vw; font-size: 28px; color: hsla(0,0,100,.9);
      }
      .aboutContent {
        top: 60px; height: 0vh;
      }
      .aboutTitle {
        font-size: 28px;
      }
      .serviceanner {
        background: url('https://radhard.herokuapp.com/images/spacex-VNb2J8Trk-unsplash_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .whatWeo {
        top: vw; font-size: 28px;
      }
      .serviceContent {
        position: relative; top: 60px;
      }
      .serviceTitle {
        font-size: 28px;
      }
      .aboutUsTitle {
        background: url('https://radhard.herokuapp.com/images/openstreet_contact_banner_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .contactPage {
        top: 60px;
      }
      .contactTitle {
        font-size: 28px;
      }
      .contactContent {
        top: 20px;
      }
      .contactUs {
        font-size: 24px;
      }
      .ourOffice {
        font-size: 24px;
      }
      .contactUs {
        margin-top: 20px;
      }
    }
    @media only screen and (min-width:69px)and (max-width:1000px) {
      .navarLogo {
        font-size: 28px;
      }
      .nav-link {
        font-size: 14px;
      }
      .homeTop {
        background: linear-gradient(hsla(0,0,94.1,.1),hsla(0,0,94.1,.1)),url('https://radhard.herokuapp.com/images/satellite-10309_1600x2crop-min.jpg'); background-size: cover; background-position-x: -300px; top: 3px; height: 0vw;
      }
      .bannerContainer {
        top: 12vw; width: 0vw; margin-left: 10px;
      }
      .contactUstn {
        left: 10px; top: 12vw;
      }
      .homeanner {
        font-size: 38px;
      }
      .homeannerText {
        font-size: 24px;
      }
      .homeottom {
        top: 10vw;
      }
      .aboutanner {
        background: url('https://radhard.herokuapp.com/images/astronaut_about_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .whoWeAre {
        top: 6vw; font-size: 28px; color: hsla(0,0,100,.9);
      }
      .aboutContent {
        top: 60px; height: 0vh;
      }
      .aboutTitle {
        font-size: 28px;
      }
      .serviceanner {
        background: url('https://radhard.herokuapp.com/images/spacex-VNb2J8Trk-unsplash_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .whatWeo {
        top: 6vw; font-size: 28px;
      }
      .serviceContent {
        position: relative; top: 60px;
      }
      .serviceTitle {
        font-size: 28px;
      }
      .aboutUsTitle {
        background: url('https://radhard.herokuapp.com/images/openstreet_contact_banner_small-min.jpg'); background-size: cover; background-position: 0; height: vw; top: 3px;
      }
      .contactPage {
        top: 60px;
      }
      .contactTitle {
        font-size: 28px;
      }
      .contactContent {
        top: 20px;
      }
      .contactUs {
        font-size: 24px;
      }
      .ourOffice {
        font-size: 24px;
      }
      .contactUs {
        margin-top: 20px; margin-bottom: 1px;
      }
    }
    </style>
    </head>
    <body style='vertical-align: baseline; box-sizing: border-box; color: #21229; text-align: left; text-shadow: none !important; box-shadow: none !important; min-width: 992px !important; margin: 0; padding: 0; border: 0; font: 400 1rem/1. apple-system, linkMacSystemFont, "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";' bgcolor="#fff"><div id="root" style="font-size: normal; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal; vertical-align: baseline; box-sizing: border-box; text-shadow: none !important; box-shadow: none !important; margin: 0; padding: 0; border: 0;"></div></body>
    </html>
    `
  };
  sgMail.send(msg)
    .then((msg) => {
      console.log(msg);
      res.send("Email has been sent.");
    });
  

})

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

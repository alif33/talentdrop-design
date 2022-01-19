import React from 'react';

const Toolbar = () => {
    return (
        <>
            <div className="p-3 border-top">
                <div className="toolbar" id="kt_toolbar">
                    {/*begin::Container*/}
                    <div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">
                        {/*begin::Page title*/}
                        <div className="d-flex align-items-center me-3">
                            {/*begin::Title*/}
                            <h1 className="d-flex align-items-center text-dark fw-bolder my-1 fs-3">Dashboard
                                {/*begin::Separator*/}
                                <span className="h-20px border-gray-200 border-start ms-3 mx-2" />
                                {/*end::Separator*/}
                                {/*begin::Description*/}
                                <small className="text-muted fs-7 fw-bold my-1 ms-1">#XRS-45670</small>
                                {/*end::Description*/}</h1>
                            {/*end::Title*/}
                        </div>
                        {/*end::Page title*/}
                        {/*begin::Actions*/}
                        <div className="d-flex align-items-center py-1">
                            {/*begin::Wrapper*/}
                            <div className="me-4">
                                {/*begin::Menu*/}
                                <a href="#" className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                                    {/*begin::Svg Icon | path: icons/stockholm/Text/Filter.svg*/}
                                    <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <path d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z" fill="#000000" />
                                            </g>
                                        </svg>
                                    </span>
                                    {/*end::Svg Icon*/}Filter</a>
                                {/*begin::Menu 1*/}
                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true">
                                    {/*begin::Header*/}
                                    <div className="px-7 py-5">
                                        <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                                    </div>
                                    {/*end::Header*/}
                                    {/*begin::Menu separator*/}
                                    <div className="separator border-gray-200" />
                                    {/*end::Menu separator*/}
                                    {/*begin::Form*/}
                                    <div className="px-7 py-5">
                                        {/*begin::Input group*/}
                                        <div className="mb-10">
                                            {/*begin::Label*/}
                                            <label className="form-label fw-bold">Status:</label>
                                            {/*end::Label*/}
                                            {/*begin::Input*/}
                                            <div>
                                                <select className="form-select form-select-solid select2-hidden-accessible" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true" data-select2-id="select2-data-7-msl1" tabIndex={-1} aria-hidden="true">
                                                    <option data-select2-id="select2-data-9-nrpt" />
                                                    <option value={1}>Approved</option>
                                                    <option value={2}>Pending</option>
                                                    <option value={2}>In Process</option>
                                                    <option value={2}>Rejected</option>
                                                </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-8-7100" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-w2p7-container" aria-controls="select2-w2p7-container"><span className="select2-selection__rendered" id="select2-w2p7-container" role="textbox" aria-readonly="true" title="Select option"><span className="select2-selection__placeholder">Select option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                            </div>
                                            {/*end::Input*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-10">
                                            {/*begin::Label*/}
                                            <label className="form-label fw-bold">Member Type:</label>
                                            {/*end::Label*/}
                                            {/*begin::Options*/}
                                            <div className="d-flex">
                                                {/*begin::Options*/}
                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                    <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                    <span className="form-check-label">Author</span>
                                                </label>
                                                {/*end::Options*/}
                                                {/*begin::Options*/}
                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
                                                    <span className="form-check-label">Customer</span>
                                                </label>
                                                {/*end::Options*/}
                                            </div>
                                            {/*end::Options*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Input group*/}
                                        <div className="mb-10">
                                            {/*begin::Label*/}
                                            <label className="form-label fw-bold">Notifications:</label>
                                            {/*end::Label*/}
                                            {/*begin::Switch*/}
                                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
                                                <label className="form-check-label">Enabled</label>
                                            </div>
                                            {/*end::Switch*/}
                                        </div>
                                        {/*end::Input group*/}
                                        {/*begin::Actions*/}
                                        <div className="d-flex justify-content-end">
                                            <button type="reset" className="btn btn-sm btn-white btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                            <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                        </div>
                                        {/*end::Actions*/}
                                    </div>
                                    {/*end::Form*/}
                                </div>
                                {/*end::Menu 1*/}
                                {/*end::Menu*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Button*/}
                            <a href="#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">Create</a>
                            {/*end::Button*/}
                        </div>
                        {/*end::Actions*/}
                    </div>
                    {/*end::Container*/}
                </div>
            </div>
        </>
    );
};

export default Toolbar;